# NATS + JetStream research notes

Compiled 2026-10-01 for the `courses/nats` course. Every fact carries a source URL. Items marked **UNVERIFIED** or **NOTE** need care before they go into a lesson.

## 0. Source map and version baseline

**Two generations of official docs exist. Use the new site.**

- `docs.nats.io` was rebuilt as a Docusaurus site with `/concepts`, `/learn`, `/tutorials`, `/reference`, `/release-notes` sections. Old GitBook URLs such as `https://docs.nats.io/nats-concepts/jetstream/consumers` and `https://docs.nats.io/using-nats/developing-with-nats/js/consumers` now **redirect** to `https://docs.nats.io/learn/jetstream/pull-consumers`, and `/nats-concepts/jetstream/streams` redirects to `/learn/jetstream/your-first-stream` (checked with `curl -L`, 2026-10-01). Do not cite the old paths in lessons; they no longer show the content they used to.
- New site source: https://github.com/nats-io/nats.docs.v2 (from the "edit this page" link on each page, e.g. https://github.com/nats-io/nats.docs.v2/edit/main/learn/jetstream/acknowledgment.md).
- The old GitBook source is still in https://github.com/nats-io/nats.docs (branch `master`, last commit 2026-08-24, SHA `f115bec`). Its config tables (with a "Version introduced" column) are still the best single place for per-field version history, so these notes cite it for version numbers, by GitHub blob URL.

**Code permalinks** are pinned to the commits cloned on 2026-10-01:

- nats-server `main` @ `a44c356c4271a23da98ee83c53c90d3f14f75682` (VERSION const = `2.16.0-dev`, https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/const.go#L69)
- nats.js `main` @ `3a7b736b175d9a387130210c88f851d71e1b014f` (packages at version 3.4.0, e.g. https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/package.json)
- nats-architecture-and-design `main` @ `1cb267ca1112db4ebb360405777e8335eb01cbc0`

**Latest releases (from `git ls-remote --tags`, 2026-10-01):**

- nats-server: latest stable tag is **v2.15.0**, published 2026-09-17 (https://github.com/nats-io/nats-server/releases/tag/v2.15.0). The 2.14 line is at v2.14.7 and 2.12 at v2.12.15. There is no 2.13 tag (odd minors appear to be skipped). Upgrade guides: https://docs.nats.io/release-notes/upgrade-to-2.12, https://docs.nats.io/release-notes/upgrade-to-2.14, https://docs.nats.io/release-notes/upgrade-to-2.15.
- nats.js: latest tag **v3.4.0** (https://github.com/nats-io/nats.js/tags).

---

## 1. Core NATS

### Subjects and wildcards

Source: https://docs.nats.io/learn/core-nats/subjects-and-wildcards

- A subject is a string the server uses to match publishers to subscribers. `.` splits it into tokens; the server matches token by token.
- Subjects are case-sensitive (`Orders.created` and `orders.created` differ). No whitespace anywhere. Safe token characters: letters, digits, `-`, `_`.
- Subjects starting with `$` are reserved for server/client internal use and should be avoided in application subject design. (`$JS.…` for JetStream API and advisories is the main example.)
- Subjects are not declared. The server holds an entry for a subject only while something subscribes to it, so millions of subjects are cheap; matching walks a token tree.
- Wildcards are **subscriber-only**. A publish always names a literal subject.
  - `*` matches **exactly one** token. `orders.*.created` matches `orders.us.created` but not `orders.created` or `orders.us.west.created`.
  - `>` matches **one or more** tokens and must be the last token (`orders.>`).

### Pub/sub and delivery guarantee

Source: https://docs.nats.io/learn/core-nats/publish-subscribe

- Core publish is fire-and-forget: the publisher is not told how many subscribers received the message, or whether any did.
- Core NATS is **at-most-once**: a subscriber connected and interested at publish time gets the message once; a subscriber that is absent, slow or disconnected gets it zero times. No retry. Persistence, redelivery and replay are added by JetStream.

### Queue groups

Source: https://docs.nats.io/learn/core-nats/queue-groups

- A queue group is a set of subscribers on the same subject sharing a group name. The server treats the group as one logical subscriber and delivers each message to exactly one member.
- Nothing is configured on the server. The group exists as soon as its first member subscribes with that name.
- Plain (non-queue) subscribers on the same subject still each get their own copy (also stated in the nats.js core README: "non-queue subscriptions are also independent of subscriptions in a queue group", https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/core/README.md#queue-groups).

### Request-reply

Source: https://docs.nats.io/learn/core-nats/request-reply

- The reply subject is an **inbox** under the reserved `_INBOX.` prefix. A client subscribes once to a wildcard like `_INBOX.<connection>.*` and gives each request a fresh final token, so thousands of concurrent requests cost one subscription.
- Replies are at-most-once too. Every request needs a timeout. In nats.js the default request timeout is 1s (comment in the core README example: "by default the request times out after 1s (1000 millis)", https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/core/README.md#making-requests).
- **No responders:** a request to a subject with zero subscribers gets an immediate reply with status `503` (header line `NATS/1.0 503`), surfaced by clients as a distinct no-responders error rather than a timeout. This tells "service is down" apart from "service is slow".
- The `_INBOX.` prefix is configurable per connection, mainly so permissions can give each app its own reply namespace.
- Max control line (subject + reply) is 4 KB by default (`max_control_line`).

---

## 2. JetStream streams

Primary config table (with version introduced): https://github.com/nats-io/nats.docs/blob/f115becf6563e3bbe16bb94cbf87bfceb84199c1/nats-concepts/jetstream/streams.md
Live narrative pages: https://docs.nats.io/learn/jetstream/your-first-stream, https://docs.nats.io/learn/jetstream/shaping-the-stream, https://docs.nats.io/learn/jetstream/retention-policies
API schema: https://docs.nats.io/reference/jetstream/api/stream/create

### Core fields and defaults

| Field | Fact | Source |
|---|---|---|
| Name | Unique per account; no whitespace, `.`, `*`, `>`, slashes, non-printables. Not editable. | old streams.md table |
| Subjects | List, wildcards allowed, editable. If none given, defaults to the stream name. A subject may be bound by only one stream. | old streams.md; live your-first-stream |
| Storage | `File` (default) or `Memory` (lost on restart). Not editable. | old streams.md "StorageType" |
| Replicas | Default 1, max 5. | old streams.md; live your-first-stream |
| MaxAge / MaxBytes / MaxMsgs / MaxMsgsPerSubject / MaxMsgSize | All unlimited by default. MaxAge is in nanoseconds on the wire. | old streams.md; live your-first-stream |
| Discard | `DiscardOld` (default): delete oldest to stay in limits. `DiscardNew`: reject new publishes that would exceed a limit. `DiscardNewPerSubject` (2.9.0) applies it per subject; needs `DiscardNew` + `MaxMsgsPerSubject`. | old streams.md "DiscardPolicy" |
| DuplicateWindow | Default **2 minutes** (`2m0s`). | live https://docs.nats.io/learn/jetstream/your-first-stream and https://docs.nats.io/learn/jetstream/publishing |
| AllowDirect | 2.9.0. Lets every replica answer direct-get requests, not only the leader. The CLI enables it for new streams. | old streams.md; live https://docs.nats.io/learn/jetstream/get-direct |
| MaxConsumers | **Changed in 2.15.0:** streams now default to a limit of **1000 consumers** unless `max_consumers` is set on the stream or account; server-wide default via `default_max_consumers` (`-1` disables). Existing consumers are not deleted. | https://github.com/nats-io/nats-server/releases/tag/v2.15.0 ; https://docs.nats.io/release-notes/upgrade-to-2.15 |
| AllowMsgTTL | 2.11.0. Enables per-message `Nats-TTL`. Can be turned on, never off. | old streams.md; live https://docs.nats.io/learn/jetstream/message-ttl |
| SubjectDeleteMarkerTTL | 2.11.0. Leaves a delete-marker message when MaxAge removes the last message on a subject. | old streams.md; https://docs.nats.io/release-notes (2.11 notes in old repo: https://github.com/nats-io/nats.docs/blob/f115becf6563e3bbe16bb94cbf87bfceb84199c1/release_notes/whats_new_211.md) |
| AllowAtomicPublish | 2.12.0 (ADR-50). | old streams.md; whats_new_212.md |
| AllowMsgCounter | 2.12.0 (ADR-49, counter CRDT). | same |
| AllowMsgSchedules | 2.12.0 (ADR-51, delayed messages); 2.14.0 added cron/interval schedules and subject sampling. | same + whats_new_214.md |
| AllowBatchPublish | 2.14.0 (fast batch publish). | old streams.md; whats_new_214.md |

### Retention policies

Sources: https://docs.nats.io/learn/jetstream/retention-policies ; old streams.md "RetentionPolicy"

- **Limits** (default): messages stay until a limit (age, bytes, count, per-subject) removes them.
- **Interest**: a message is removed once every consumer whose filter covers it has acked it. If no consumer is interested in a subject when the message arrives, it is removed right away. A stalled consumer holds up cleanup and can fill the disk, so Interest still needs limits.
- **WorkQueue**: a message is removed by the first ack. The server **rejects overlapping consumers**: errors `multiple non-filtered consumers not allowed on workqueue stream` / `filtered consumer not unique on workqueue stream`. Scale a WorkQueue workload with many workers on one consumer, or partition with non-overlapping filters.
- Limits still apply under Interest and WorkQueue. With `DiscardOld` + `MaxMsgs` on a WorkQueue stream, messages can be deleted before any consumer saw them (old streams.md warning hint).
- **Retention is not editable** after creation (old streams.md table, `Retention` row: Editable "No"); the live page advises creating a new stream rather than changing it.
- **DLQ-relevant:** on a WorkQueue stream, messages that reached `MaxDeliver` **stay in the stream** and must be removed via the API (old streams.md info hint: "Messages that have attempted redelivery and have reached MaxDeliver attempts for the consumer will remain in the stream and must be manually deleted via the JetStream API.")
- **DLQ-relevant trap:** `term` is processed like an ack. "On a WorkQueue or Interest stream, where a handled message is removed, a term removes it just as an ack would" (https://docs.nats.io/learn/jetstream/acknowledgment, "Term: the poison message path"). Server code confirms `processTerm` calls `processAckMsgLocked` first ("Treat like an ack to suppress redelivery", https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/consumer.go#L3334-L3361). **Consequence:** after a term on a WorkQueue stream (or on an Interest stream where it was the last interested consumer), fetching the original by `stream_seq` can fail because the message is gone. MaxDeliver exhaustion does not ack, so the max-deliveries case does not have this problem.

### Deduplication (`Nats-Msg-Id`)

Sources: https://docs.nats.io/learn/jetstream/publishing ; old model deep dive referenced from streams.md

- Publishing with header `Nats-Msg-Id` makes the server refuse to store a second message with the same ID inside the stream's duplicate window (default 2 minutes). The PubAck for a blocked duplicate has `duplicate: true`.
- Use a stable, recomputable ID (order ID, request ID, payload hash). A retry after the window expires is stored again.
- A PubAck confirms storage, not delivery to any consumer.
- nats.js: `js.publish(subj, data, { msgID: "a" })` sets the header; the PubAck exposes `pa.stream`, `pa.seq`, `pa.duplicate` (https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/README.md#jetstream-client).

### Per-message TTL (2.11+)

Sources: ADR-43 https://github.com/nats-io/nats-architecture-and-design/blob/1cb267ca1112db4ebb360405777e8335eb01cbc0/adr/ADR-43.md ; https://docs.nats.io/learn/jetstream/message-ttl

- Header `Nats-TTL`, value in seconds or a Go duration string (`1h`). Minimum 1 second. `never` means never expire, even past the stream's MaxAge.
- Stream must have `AllowMsgTTL`; otherwise the publish is rejected (err_code 10166 per the live page).
- A message lives until the earlier of its TTL and the stream MaxAge (except `never`).
- TTL is a deadline on the stored copy, not on delivery: an unread message still expires.
- nats.js publish option: `ttl?: string` ("1s", "1h", or a plain number of seconds) (https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/src/types.ts#L270-L277).

---

## 3. Consumers

Config table with versions: https://github.com/nats-io/nats.docs/blob/f115becf6563e3bbe16bb94cbf87bfceb84199c1/nats-concepts/jetstream/consumers.md
Live pages: https://docs.nats.io/learn/jetstream/delivery-and-acknowledgment, https://docs.nats.io/learn/jetstream/acknowledgment, https://docs.nats.io/learn/jetstream/pull-consumers, https://docs.nats.io/learn/jetstream/worker-pool, https://docs.nats.io/learn/jetstream/ordered-consumer
API schema: https://docs.nats.io/reference/jetstream/api/consumer/create

### Durable vs ephemeral

Source: old consumers.md "Persistence - Durable / Ephemeral"

- Durable = the `Durable` field is set. Otherwise ephemeral. Setting `Name` without `Durable` gives a named consumer the server still treats as ephemeral.
- `InactiveThreshold` only controls automatic cleanup and does not make a consumer durable. Since 2.9 it applies to durables as well; before 2.9 only to ephemerals.
- Ephemeral consumers have no persisted state or fault tolerance (memory only) and are deleted after inactivity.
- Consumers inherit the stream's replica count by default (`Replicas: 0` means inherit, 2.8.3).

### Pull vs push

- Setting `DeliverSubject` makes a consumer push; without it, pull (old consumers.md, push-specific table).
- Official recommendation: "We recommend pull consumers for new projects. In particular when scalability, detailed flow control or error handling are a concern." (old consumers.md hint).
- Pull patterns: **fetch** (batch of up to N, returns when full or `expires` hits) and **consume** (continuous; library issues pulls in the background) (https://docs.nats.io/learn/jetstream/pull-consumers).
- Ordered consumers: always ephemeral, no acks, recreated on gap, single-threaded, no load balancing; for in-order read-back (old consumers.md "Ordered Consumers"; https://docs.nats.io/learn/jetstream/ordered-consumer).
- nats.js v3: `js.consumers.get(stream, name)` returns a pull consumer; `js.consumers.get(stream)` with no name creates an ordered consumer; push consumers are available separately via `getPushConsumer` (https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/src/types.ts#L1312).
- Priority groups are pull-only; nats.js rejects `deliver_subject` with priority groups ("'deliver_subject' cannot be set when using priority groups", https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/tests/jetstream_pushconsumer_test.ts#L995-L1010).

### Ack policies

Sources: old consumers.md "AckPolicy"; https://docs.nats.io/learn/jetstream/acknowledgment "Ack policy: the other values"

- `explicit` (default): every message acked individually. Required for everything in the redelivery section.
- `none`: delivery counts as done. No pending list, no AckWait, no redelivery.
- `all`: acking N acks everything before it. Only safe with strictly ordered processing; otherwise acking 10 can retire a failed 7 that was waiting for redelivery.
- `flow_control` (2.14): for the durable consumers the server creates for sourcing/mirroring; not for work consumers.
- AckPolicy is not editable after creation (old consumers.md table).
- Warning from old consumers.md: an ack that arrives after AckWait (e.g. from the first worker, after redelivery to a second) may still be accepted by the server.

### Ack responses (wire protocol)

Server constants: `+ACK`, `-NAK`, `+WPI`, `+NXT`, `+TERM` (https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/consumer.go#L399-L412). Dispatch: https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/consumer.go#L2850-L2875

| Response | Meaning | Details |
|---|---|---|
| ack (`+ACK` or empty) | Done. | Removes from pending list. |
| nak (`-NAK`) | Failed, redeliver. | Plain nak = immediate redelivery. `-NAK {"delay": <ns>}` or `-NAK <go-duration>` delays it (server parses both forms, https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/consumer.go#L3280-L3312). Delay supported from server **2.7.1** (nats.js README, JsMsg section). Every nak also publishes a `nak` advisory (see section 4). |
| in-progress (`+WPI`) | Still working. | Resets the pending timestamp to now, restarting the ack timer (`progressUpdate`, https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/consumer.go#L2885-L2894). Not final. |
| term (`+TERM [reason]`) | Give up, never redeliver. | Treated like an ack, then publishes a `terminated` advisory with optional reason (consumer.go L3334-L3361). |

Live doc summary of the four: https://docs.nats.io/learn/jetstream/acknowledgment "The four responses".

### AckWait, MaxDeliver, BackOff, MaxAckPending

| Setting | Default and behaviour | Source |
|---|---|---|
| AckWait | **30s** default (`JsAckWaitDefault = 30 * time.Second`, applied to explicit-ack consumers). Editable. | https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/consumer.go#L596-L597 ; live acknowledgment page |
| MaxDeliver | Default **-1** (unlimited). Counts every delivery including nak and timeout redeliveries. A message that hits it **stays in the stream**; only delivery to that consumer stops. | old consumers.md table; live acknowledgment page "The server controls" |
| BackOff | 2.7.1. List of delays for redeliveries **after AckWait timeouts only, not naks**. When set it **replaces AckWait**: `config.AckWait = config.BackOff[0]`. If MaxDeliver > len(BackOff), the last entry repeats. `len(BackOff) > MaxDeliver` is rejected unless MaxDeliver is -1. | old consumers.md table; https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/consumer.go#L677-L682 and #L806-L808 ; live acknowledgment page "Backoff" |
| MaxAckPending | Default **1000** for explicit-ack consumers (`JsDefaultMaxAckPending`). `-1` = no limit. Applies across all subscribers of the consumer; delivery stops when reached. Too low starves batches (limit 10 vs batch 100 delivers 10 then waits). | consumer.go #L603-L604 ; old consumers.md "MaxAckPending"; https://docs.nats.io/learn/jetstream/pull-consumers pitfalls |

Other facts:

- A redelivered message does not slot back into stream order; later messages keep flowing while it waits. Strict order requires MaxAckPending = 1 (https://docs.nats.io/learn/jetstream/delivery-and-acknowledgment).
- Use a delayed nak for transient failures; a consumer BackOff does not slow a bare nak (live acknowledgment page pitfalls).

### Deliver policies

Source: old consumers.md "DeliverPolicy"

`all` (default), `last`, `last_per_subject`, `new`, `by_start_sequence` (needs `OptStartSeq`), `by_start_time` (needs `OptStartTime`). Not editable.

### Newer consumer features

| Feature | Version | Facts | Source |
|---|---|---|---|
| Consumer pause | **2.11** | `PauseUntil` on create, or pause API `$JS.API.CONSUMER.PAUSE.<stream>.<consumer>`. Stops delivery until the deadline, then auto-resumes; keeps cursor, ack floor and redelivery counts. Heartbeats continue. Publishes `$JS.EVENT.ADVISORY.CONSUMER.PAUSE` advisory. nats.js: `jsm.consumers.pause(stream, name, until?: Date)` / `resume(stream, name)`. | whats_new_211.md; https://docs.nats.io/learn/jetstream/pausing ; https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/jetstream_api.go#L152-L155 ; https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/src/types.ts#L487-L509 |
| Priority groups: `overflow`, `pinned_client` | **2.11** | Consumer config `PriorityGroups` (one group effective today, max 16 chars) + `PriorityPolicy`. Pull-only. Every pull must name the group. Overflow: pulls with `min_pending` / `min_ack_pending` only get messages when the backlog crosses the threshold. Pinned: one client gets everything; others stand by; switch after `PriorityTimeout`; pinned id in `Nats-Pin-Id` header. Not a guarantee of exclusivity. Overflow and pinned need explicit ack. | ADR-42 https://github.com/nats-io/nats-architecture-and-design/blob/1cb267ca1112db4ebb360405777e8335eb01cbc0/adr/ADR-42.md ; https://docs.nats.io/learn/jetstream/priority-groups |
| Priority groups: `prioritized` | **2.12** | Pulls carry `priority` 0-9; lower served first. Needs no acks. | whats_new_212.md; ADR-42 "prioritized policy" |
| Consumer reset API | **2.14** | Reset delivery state to the ack floor or to a sequence, equivalent to delete+recreate at that sequence. nats.js `jsm.consumers.reset(stream, name, seq?)` (requires 2.14.0+; only for deliver policy all / by_start_sequence / by_start_time). | whats_new_214.md; ADR-60; https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/src/types.ts#L518-L536 |

---

## 4. Advisories

Live narrative: https://docs.nats.io/learn/monitoring/advisories-and-events
Reference index: https://docs.nats.io/reference/jetstream/advisory/
Server definitions: https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/jetstream_api.go#L271-L358 (subjects) and https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/jetstream_events.go (payload structs and type strings)

### What they are

- An advisory is a JSON message JetStream publishes once when something notable happens. It is a normal NATS message on a well-known subject under `$JS.EVENT.ADVISORY.>` (live advisories page).
- **Transient.** "An advisory is published exactly once, the moment its event fires, and it is not stored in any stream. If you're not subscribed at that instant, you never learn the event happened." (live advisories page, Pitfalls). The fix in the official docs is a stream bound to the advisory subjects.
- **Server skips publishing when nobody is listening.** `sendAdvisory` returns early if the account has no subscription interest (and no gateway interest) on the subject: "If there is no one listening for this advisory then save ourselves the effort" (https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/consumer.go#L2006-L2015). A stream listening on the subject counts as interest.
- Advisories are published in the account that owns the stream (implied by `o.acc` in `sendAdvisory`; **NOTE:** the docs pages do not state the account scoping explicitly. Verify on Synadia Cloud that the application account can subscribe to its own `$JS.EVENT.ADVISORY.>`).

### Consumer delivery advisories (the DLQ-relevant three)

| Advisory | Subject | `type` | Fields | When |
|---|---|---|---|---|
| Max deliveries | `$JS.EVENT.ADVISORY.CONSUMER.MAX_DELIVERIES.<stream>.<consumer>` | `io.nats.jetstream.advisory.v1.max_deliver` | `type`, `id`, `timestamp`, `stream`, `consumer`, `stream_seq`, `deliveries`, `domain?` | A message reaches MaxDeliver without a final ack. Only if MaxDeliver > 0 (`if o.maxdc == 0 { return false }`). "Only send the advisory once." |
| Terminated | `$JS.EVENT.ADVISORY.CONSUMER.MSG_TERMINATED.<stream>.<consumer>` | `io.nats.jetstream.advisory.v1.terminated` | `type`, `id`, `timestamp`, `stream`, `consumer`, `consumer_seq`, `stream_seq`, `deliveries`, `reason?`, `domain?` | Client sends `+TERM`. |
| Nak | `$JS.EVENT.ADVISORY.CONSUMER.MSG_NAKED.<stream>.<consumer>` | `io.nats.jetstream.advisory.v1.nak` | `type`, `id`, `timestamp`, `stream`, `consumer`, `consumer_seq`, `stream_seq`, `deliveries`, `domain?` | Every nak. |

Sources:

- Subjects: jetstream_api.go #L280-L287; per-consumer suffix built at https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/consumer.go#L1283-L1284 and #L3359.
- Structs and type strings: https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/jetstream_events.go#L120-L163 ; `TypedEvent` (`type`, `id`, `timestamp`) at https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/events.go#L472-L476
- Max-deliveries emission: https://github.com/nats-io/nats-server/blob/a44c356c4271a23da98ee83c53c90d3f14f75682/server/consumer.go#L2427-L2437 , #L4886-L4900 , #L4970-L4990
- Reference schemas: https://docs.nats.io/reference/jetstream/advisory/max-deliver , https://docs.nats.io/reference/jetstream/advisory/terminated , https://docs.nats.io/reference/jetstream/advisory/nak
- Example payload from docs:
  ```json
  {
    "type": "io.nats.jetstream.advisory.v1.max_deliver",
    "stream": "ORDERS",
    "consumer": "shipping",
    "stream_seq": 987,
    "deliveries": 5
  }
  ```
  (https://docs.nats.io/learn/monitoring/advisories-and-events; real payloads also carry `id` and `timestamp`.)

**NOTE (schema discrepancy):** the reference page lists `consumer_seq` on the terminated advisory as type `string`; the server struct is `uint64` and serializes as a JSON number (jetstream_events.go #L155). Trust the server.

**NOTE (timing):** the max-deliveries advisory fires when the server would otherwise redeliver the message for the (MaxDeliver+1)th time, i.e. after the last delivery's AckWait/backoff expires or after its nak, not at the moment of the last delivery. This is read from `getNextMsg` / `hasMaxDeliveries` in consumer.go, not from a doc statement.

### Other advisory subjects (for completeness)

From jetstream_api.go #L289-L358: `STREAM.CREATED|DELETED|UPDATED`, `CONSUMER.CREATED|DELETED`, `CONSUMER.PAUSE` (2.11), `CONSUMER.PINNED|UNPINNED` (2.11, priority groups), `STREAM.SNAPSHOT_CREATE|SNAPSHOT_COMPLETE|RESTORE_CREATE|RESTORE_COMPLETE`, `DOMAIN.LEADER_ELECTED`, `STREAM.LEADER_ELECTED|QUORUM_LOST`, `STREAM.BATCH_ABANDONED`, `CONSUMER.LEADER_ELECTED|QUORUM_LOST`, `SERVER.OUT_OF_STORAGE`, `SERVER.REMOVED`, `SERVER.META_RESCUE`, `API.LIMIT_REACHED`, and the API audit `$JS.EVENT.ADVISORY.API`. Full schema list: https://docs.nats.io/reference/jetstream/advisory/

### nats.js helper

`jsm.advisories()` returns an async iterable of `{ kind, data }`, built on a **core** subscription to `$JS.EVENT.ADVISORY.>` (https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/src/jsclient.ts#L244-L263). `AdvisoryKind` includes `max_deliver` and `terminated` but **not** `nak` (https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/src/types.ts#L1464-L1479). Because it is a core subscription, it has the same "missed if not connected" weakness; it is a monitoring tool, not a DLQ.

---

## 5. Dead-letter queue patterns

### Ground truth

- "JetStream has no built-in dead-letter queue." (https://docs.nats.io/learn/jetstream/acknowledgment, Pitfalls). Same statement: https://docs.nats.io/learn/monitoring/advisories-and-events and https://docs.nats.io/learn/jetstream/where-next.
- Synadia blog: "NATS does not ship a single-config dead-letter queue." (Andrew Connolly, 2026-07-24, https://www.synadia.com/blog/jetstream-reliable-delivery-dlq-replay).
- Synadia blog on WorkQueue streams: JetStream "does not provide an automatic fallback consumer or automatic dead-letter queue for workqueue messages that have no matching consumer" (2026-05-22, https://www.synadia.com/blog/jetstream-workqueue-no-consumer-fallback).
- The old developer docs had a section literally titled `"Dead Letter Queues" type functionality` describing the same advisory + `stream_seq` approach (https://github.com/nats-io/nats.docs/blob/f115becf6563e3bbe16bb94cbf87bfceb84199c1/using-nats/developing-with-nats/js/consumers.md#dead-letter-queues-type-functionality). Key line: "If a message reaches its maximum level of delivery attempts, it will still stay in the stream until it is manually deleted or manually acknowledged."
- No DLQ-specific server feature was found through v2.15.0 / main (`2.16.0-dev`). A grep for "dead letter" / "DLQ" across nats-server `server/` matches only the advisory struct comments ("might be a candidate for DLQ handling", jetstream_events.go #L120-L121, #L149-L150). Searched the 2.11, 2.12, 2.14 release notes and the 2.15.0 GitHub release body: nothing DLQ-specific.

### The pattern (as documented)

1. Consumer has `ack_policy: explicit` and a finite `max_deliver` (otherwise no max-deliveries advisory ever fires). Optionally `backoff`.
2. Handler acks on success, naks with a delay on transient failure, terms on known-permanent failure (optionally with a reason).
3. A **stream bound to the advisory subjects** captures `MAX_DELIVERIES` and `MSG_TERMINATED` advisories durably. The docs' CLI example: `nats stream add ADVISORIES --subjects '$JS.EVENT.ADVISORY.>' --storage file --retention limits --max-age 168h --defaults` (https://docs.nats.io/learn/monitoring/advisories-and-events, Pitfalls). Narrower subjects such as `$JS.EVENT.ADVISORY.CONSUMER.MAX_DELIVERIES.ORDERS.*` are fine.
4. A DLQ worker consumes the advisory stream, parses `stream` + `stream_seq`, and **fetches the original** with a stream message get (`$JS.API.STREAM.MSG.GET.<stream>`, request `{ "seq": n }`, https://docs.nats.io/reference/jetstream/api/stream/msg-get) or a Direct Get.
5. The Synadia blog version **copies the original payload into a separate DLQ stream** (subjects like `dlq.<stream>.<consumer>`) at capture time, so later inspection and replay do not depend on the source stream still holding it (https://www.synadia.com/blog/jetstream-reliable-delivery-dlq-replay; its code is Go: `src.GetMsg(ctx, a.StreamSeq)`).

### Failure modes and design notes

- **Original may be gone.** Limits retention: MaxAge/MaxMsgs/MaxBytes can remove it before the DLQ worker runs. WorkQueue/Interest: a **term removes it** (treated as ack). Mitigation: copy at capture time; keep the DLQ worker fast; size MaxAge with margin.
- **WorkQueue + MaxDeliver leaves residue:** max-delivered messages stay in a WorkQueue stream until deleted via API (old streams.md hint). After copying to the DLQ, delete or the stream holds them forever (until limits). `jsm.streams.deleteMessage(stream, seq)` exists in nats.js (JSM README section).
- **Interest + MaxDeliver** similarly never gets the ack from that consumer, so the message is retained for that consumer's interest until limits remove it (inference from the Interest definition; **UNVERIFIED** as a documented statement).
- **Advisories are fire-once and skipped with no interest.** If the advisory stream is missing or misconfigured at the moment, the event is lost forever (server `sendAdvisory` early return).
- **Advisory stream must have room.** If it uses `DiscardNew` and is full, advisories are rejected (general DiscardNew semantics, old streams.md).
- **Direct Get is not read-after-write consistent** (any replica may answer). `jsm.streams.getMessage` uses `$JS.API.STREAM.MSG.GET` which goes to the leader (https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/src/jsmstream_api.ts#L680-L702 ; https://docs.nats.io/learn/jetstream/get-direct). For DLQ lookups prefer `streams.getMessage`. It returns `null` when the message no longer exists (the `NoMessageFound` API error is mapped to `null`), so the DLQ worker must handle `null`.
- **Advisory payload has no message body or headers.** Only stream + sequence (+ consumer, deliveries, reason for term). Any context (headers like trace IDs, the failure reason for a max-deliveries case) must come from the fetched original or be logged by the handler.
- **Term reason is free text** and is only in the terminated advisory, so a DLQ worker can carry it into the DLQ copy as a header.
- **Replay** options: republish from the DLQ stream to the original subject (consider a new `Nats-Msg-Id` or the dedupe window will block a quick replay of the same ID; inference from dedupe semantics), or for whole-consumer rewinds the 2.14 consumer reset API.
- **2.15 consumer limit:** dedicated DLQ/advisory consumers count toward the new default 1000 consumers per stream (https://github.com/nats-io/nats-server/releases/tag/v2.15.0).
- **Synadia Cloud:** account JetStream usage (streams, consumers, storage) is bounded by the billing plan (https://docs.synadia.com/cloud/user-guides/sc-overview). An extra advisory stream and a DLQ stream each count. **UNVERIFIED:** which nats-server version Synadia Cloud currently runs, and whether any `$JS.EVENT.ADVISORY` subjects are restricted there. Check with Synadia before relying on 2.11+ features (pause, priority groups, TTL) or 2.14 consumer reset.

### Related newer features (not DLQs, but often relevant)

- Per-message TTL (2.11): could give DLQ copies their own lifetime via `Nats-TTL` if the DLQ stream sets `AllowMsgTTL`.
- Consumer pause (2.11): stop a consumer during a downstream outage instead of burning MaxDeliver attempts (https://docs.nats.io/learn/jetstream/pausing).
- Message schedules (2.12, cron in 2.14): delayed re-publish for "retry later" flows (ADR-51 https://github.com/nats-io/nats-architecture-and-design/blob/1cb267ca1112db4ebb360405777e8335eb01cbc0/adr/ADR-51.md).
- Consumer reset (2.14): rewind a consumer without delete/recreate (ADR-60).

---

## 6. nats.js v3 code snippets

Packages: `@nats-io/transport-node` (exports `connect` and re-exports the core module, so `Empty`, `headers`, `nanos` are importable from it: https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/transport-node/src/mod.ts and https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/transport-node/src/nats-base-client.ts), `@nats-io/jetstream` (exports `jetstream`, `jetstreamManager`, `AckPolicy`, etc.). The transport-node README: "This module simply exports a `connect()` function that returns a `NatsConnection` supported by a Nodejs TCP socket" (https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/transport-node/README.md).

**NOTE:** the core README examples import from `@nats-io/transport-deno`; for Node, swap the import to `@nats-io/transport-node`. Everything else is identical. Snippets marked *verbatim* are copied from README/docs; snippets marked *composed* combine verified signatures and were not run.

### Connect, publish, subscribe, drain (verbatim from core README, Node import)

Source: https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/core/README.md#publish-and-subscribe

```typescript
import { connect } from "@nats-io/transport-node";

const nc = await connect({ servers: "demo.nats.io:4222" });

const sub = nc.subscribe("hello");
(async () => {
  for await (const m of sub) {
    console.log(`[${sub.getProcessed()}]: ${m.string()}`);
  }
  console.log("subscription closed");
})();

nc.publish("hello", "world");
nc.publish("hello", "again");

await nc.drain();
```

Wildcards: `nc.subscribe("help.*.system")`, `nc.subscribe("help.>")` (README "Wildcard Subscriptions").
Queue group: `nc.subscribe("echo", { queue: queue })` (README "Queue Groups").
Request: `await nc.request("time", Empty, { timeout: 1000 })`; responder: `m.respond(...)` (README "Services: Request/Reply").
Callback form (same event loop, iterator never yields): `nc.subscribe(subj, { callback: (err, msg) => { ... } })` (README "Async vs. Callbacks").

### JetStreamManager: add stream, add consumer (verbatim from jetstream README)

Source: https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/README.md#jetstreammanager-jsm

```typescript
import { AckPolicy, jetstream, jetstreamManager } from "@nats-io/jetstream";

const jsm = await jetstreamManager(nc);

const stream = "mystream";
const subj = `mystream.*`;
await jsm.streams.add({ name: stream, subjects: [subj] });

await jsm.consumers.add(stream, {
  durable_name: "me",
  ack_policy: AckPolicy.Explicit,
});
```

Durable with redelivery controls (*composed*; field names from `ConsumerConfig` in https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/src/jsapi_types.ts#L1139-L1197, durations are nanoseconds so use `nanos(ms)`):

```typescript
import { nanos } from "@nats-io/transport-node";
import { AckPolicy, DeliverPolicy } from "@nats-io/jetstream";

await jsm.consumers.add("ORDERS", {
  durable_name: "shipping",
  ack_policy: AckPolicy.Explicit,
  deliver_policy: DeliverPolicy.All,
  ack_wait: nanos(30_000),
  max_deliver: 5,
  backoff: [nanos(1_000), nanos(5_000), nanos(30_000)],
  max_ack_pending: 1000,
});
```

### Publish with dedupe (verbatim)

```typescript
const js = jetstream(nc);
await js.publish("a.b", Empty, { msgID: "a" });
```

### Consume / fetch / next with ack, nak, term, working

Verbatim forms (jetstream README "Processing Messages"):

```typescript
const c = await js.consumers.get(stream, consumer);

// one at a time
const m = await c.next();
if (m) {
  m.ack();
}

// batch
let messages = await c.fetch({ max_messages: 4, expires: 2000 });
for await (const m of messages) {
  m.ack();
}

// continuous
const messages = await c.consume();
for await (const m of messages) {
  console.log(m.seq);
  m.ack();
}
```

`JsMsg` methods (https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/src/jsmsg.ts#L323-L358): `ack()`, `nak(millis?)` (sends `-NAK {"delay": <ns>}`), `working()` (sends `+WPI`), `term(reason = "")` (sends `+TERM <reason>`), `ackAck()` (awaits server confirmation). Live docs JS example: `m.nak(10_000); // ask for redelivery after 10 seconds` (https://docs.nats.io/learn/jetstream/acknowledgment).

Handler skeleton (*composed*):

```typescript
const messages = await c.consume({ max_messages: 10 });
for await (const m of messages) {
  try {
    const order = m.json<Order>();
    if (!isValid(order)) {
      m.term("invalid payload");       // permanent: never redeliver, emits MSG_TERMINATED
      continue;
    }
    const timer = setInterval(() => m.working(), 10_000); // long job: reset AckWait
    try {
      await ship(order);
    } finally {
      clearInterval(timer);
    }
    m.ack();
  } catch (err) {
    m.nak(5_000);                      // transient: redeliver after 5s
  }
}
```

Horizontal scaling guidance from README: many processes calling `next()` / `consume({ max_messages: 1 })` on one shared consumer.

### Subscribing to advisories

Core subscription (verbatim from docs JS tab, https://docs.nats.io/learn/jetstream/acknowledgment):

```typescript
const sub = nc.subscribe(
  "$JS.EVENT.ADVISORY.CONSUMER.MAX_DELIVERIES.ORDERS.shipping",
);
for await (const m of sub) {
  console.log(`max deliveries reached: ${m.string()}`);
}
```

Durable capture stream + consumer (*composed* from verified APIs; mirrors the docs' CLI `nats stream add ADVISORIES` example):

```typescript
import { nanos } from "@nats-io/transport-node";
import { AckPolicy, RetentionPolicy, StorageType } from "@nats-io/jetstream";

await jsm.streams.add({
  name: "ORDERS_DLQ_EVENTS",
  subjects: [
    "$JS.EVENT.ADVISORY.CONSUMER.MAX_DELIVERIES.ORDERS.*",
    "$JS.EVENT.ADVISORY.CONSUMER.MSG_TERMINATED.ORDERS.*",
  ],
  storage: StorageType.File,
  retention: RetentionPolicy.Workqueue,
  max_age: nanos(7 * 24 * 60 * 60 * 1000),
});
await jsm.consumers.add("ORDERS_DLQ_EVENTS", {
  durable_name: "dlq-worker",
  ack_policy: AckPolicy.Explicit,
});
```

Library helper (verified signature, core-subscription based): `for await (const a of jsm.advisories()) { if (a.kind === "max_deliver") ... }`.

### getMessage by stream sequence

Verbatim (jetstream README JSM section):

```typescript
const sm = await jsm.streams.getMessage(stream, { seq: 1 });
console.log(sm.seq);
```

In v3 the return type is `Promise<StoredMsg | null>` (https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/src/types.ts#L399-L405). `StoredMsg` has `subject`, `seq`, `header`, `data`, `time`, `timestamp`, `json()`, `string()`. Direct variant: `jsm.direct.getMessage(stream, { seq })` (requires `allow_direct`; marked "Non-Stable" in the type docs, https://github.com/nats-io/nats.js/blob/3a7b736b175d9a387130210c88f851d71e1b014f/jetstream/src/types.ts#L1339-L1356).

DLQ worker (*composed*):

```typescript
import { headers } from "@nats-io/transport-node";

type DlqAdvisory = {
  type: string;
  stream: string;
  consumer: string;
  stream_seq: number;
  deliveries: number;
  reason?: string;
};

const dlq = await js.consumers.get("ORDERS_DLQ_EVENTS", "dlq-worker");
for await (const m of await dlq.consume()) {
  const adv = m.json<DlqAdvisory>();
  const original = await jsm.streams.getMessage(adv.stream, { seq: adv.stream_seq });
  const h = headers();
  h.set("Dlq-Advisory-Type", adv.type);
  h.set("Dlq-Stream-Seq", String(adv.stream_seq));
  h.set("Dlq-Deliveries", String(adv.deliveries));
  if (adv.reason) h.set("Dlq-Reason", adv.reason);
  if (original === null) {
    h.set("Dlq-Original-Missing", "true"); // aged out, or removed by term on WorkQueue/Interest
    await js.publish(`dlq.${adv.stream}.${adv.consumer}`, "", { headers: h });
  } else {
    h.set("Dlq-Original-Subject", original.subject);
    await js.publish(`dlq.${adv.stream}.${adv.consumer}`, original.data, { headers: h });
  }
  m.ack();
}
```

---

## 7. Top resources (ranked)

1. **Ack responses and redelivery**, https://docs.nats.io/learn/jetstream/acknowledgment . The single best page for this course: ack/nak/term/in-progress, AckWait, MaxDeliver, BackOff, the "no DLQ" pitfall, with JS tabs.
2. **Advisories & events**, https://docs.nats.io/learn/monitoring/advisories-and-events . Advisory subjects, the max_deliver payload, and the "capture advisories in a stream" fix.
3. **JetStream advisory reference**, https://docs.nats.io/reference/jetstream/advisory/ . Exact JSON schemas for max_deliver, terminated, nak and the rest.
4. **nats.js JetStream README**, https://github.com/nats-io/nats.js/blob/main/jetstream/README.md . Canonical v3 TypeScript API for JSM, consumers, next/fetch/consume, JsMsg.
5. **nats-server `jetstream_events.go` + `consumer.go`**, https://github.com/nats-io/nats-server/tree/main/server . Ground truth for defaults, advisory structs, and when advisories fire.
6. **Reliable Message Delivery in NATS JetStream: Acks, Retries, Dead Letters, and Replay** (Synadia blog, 2026-07-24), https://www.synadia.com/blog/jetstream-reliable-delivery-dlq-replay . End-to-end DLQ design, copy-at-capture, retention interplay (Go code).
7. **Retention policies**, https://docs.nats.io/learn/jetstream/retention-policies . Limits vs Interest vs WorkQueue, including WorkQueue overlap rules; decides whether a DLQ lookup can still find the original.
8. **NATS ADRs**, https://github.com/nats-io/nats-architecture-and-design . Design intent and version tags for newer features (ADR-42 priority groups, ADR-43 TTL, ADR-31 direct get, ADR-60 consumer reset).

Honourable mentions: old consumer/stream config tables with version columns (https://github.com/nats-io/nats.docs/blob/master/nats-concepts/jetstream/consumers.md , .../streams.md); NATS by Example (https://natsbyexample.com, multi-language runnable examples; **UNVERIFIED** whether its TypeScript examples use v3 `@nats-io/*` or the legacy `nats` v2 package); Synadia video "The ONE feature that makes NATS more powerful than Kafka, Pulsar, RabbitMQ & Redis" on consumers (https://youtu.be/334XuMma1fk, Synadia channel, embedded by the old consumer docs).

## 8. Communities

- **NATS Slack** (official, very active, maintainers answer): https://slack.nats.io (redirects to a natsio workspace invite; linked from the docs footer).
- **GitHub Discussions on nats-server**: https://github.com/nats-io/nats-server/discussions (checked, 200). nats.js has no Discussions tab (404); use its issues: https://github.com/nats-io/nats.js/issues
- **NATS YouTube channel**: https://www.youtube.com/@NATS_io (checked, 200); Synadia's channel: https://www.youtube.com/@SynadiaCommunications
- Google Groups is linked from the docs footer (https://groups.google.com/forum/) but appears low traffic; **UNVERIFIED** activity level.

## 9. Not verified / open questions

- context7 MCP was unavailable (authentication-only tools exposed), so verification used direct clones of the official repos plus `curl` of the live docs site.
- Synadia Cloud specifics: server version, plan limits on streams/consumers, any restriction on `$JS.EVENT.ADVISORY.>` subscriptions or advisory-capturing streams. Not found in public docs.
- None of the *composed* nats.js snippets were executed against a server.
- Interest-retention behaviour after MaxDeliver is inferred, not a quoted doc statement.
- Exact moment the max-deliveries advisory fires (after the final AckWait/nak, not at final delivery) is read from server code, not docs.
- Whether NATS by Example TypeScript code is v3.
