# NATS and JetStream Resources

Full cited research, including verbatim and composed nats.js snippets and version history: `research-notes.md` (compiled 2026-10-01 against nats-server v2.15.0 and nats.js v3.4.0).

Note: docs.nats.io was rebuilt. Old GitBook paths (`/nats-concepts/...`, `/using-nats/...`) now redirect to unrelated pages. Cite only `/learn`, `/reference`, `/release-notes` paths.

## Knowledge

- [NATS docs: Core NATS (publish-subscribe, subjects, queue groups, request-reply)](https://docs.nats.io/learn/core-nats/publish-subscribe)
  Short, precise, with two-terminal exercises. Use for: Arc 1.
- [NATS docs: Ack responses and redelivery](https://docs.nats.io/learn/jetstream/acknowledgment)
  The single best page for this course: ack, nak, term, in-progress, AckWait, MaxDeliver, BackOff, and the "no DLQ" pitfall. Use for: acks, redelivery, giving up.
- [NATS docs: Advisories and events](https://docs.nats.io/learn/monitoring/advisories-and-events)
  Advisory subjects, the max_deliver payload, and capturing advisories in a stream. Use for: advisories lesson.
- [NATS docs: JetStream advisory reference](https://docs.nats.io/reference/jetstream/advisory/)
  Exact JSON schemas (max_deliver, terminated, nak). Use for: payload fields in the DLQ pattern.
- [NATS docs: Retention policies](https://docs.nats.io/learn/jetstream/retention-policies)
  Limits vs Interest vs WorkQueue. Use for: streams lesson, and whether a DLQ lookup can still find the original message.
- [nats.js JetStream README](https://github.com/nats-io/nats.js/blob/main/jetstream/README.md)
  Canonical v3 TypeScript API. Use for: all JetStream code.
- [Synadia blog: Reliable Message Delivery in NATS JetStream: Acks, Retries, Dead Letters, and Replay (2026-07-24)](https://www.synadia.com/blog/jetstream-reliable-delivery-dlq-replay)
  End-to-end DLQ design from the vendor under evaluation; copy-at-capture. Use for: DLQ pattern lesson. Code is Go.
- [nats-server source: consumer.go, jetstream_events.go](https://github.com/nats-io/nats-server/tree/main/server)
  Ground truth for defaults and when advisories fire. Use for: edge cases the docs do not state.
- [NATS architecture ADRs](https://github.com/nats-io/nats-architecture-and-design)
  Design intent and version tags for newer features (priority groups, per-message TTL, direct get, consumer reset).

## Wisdom (Communities)

- [NATS Slack](https://slack.nats.io)
  Official, active, maintainers answer. Use for: design review of the DLQ approach, Synadia Cloud specifics.
- [nats-server GitHub Discussions](https://github.com/nats-io/nats-server/discussions)
  Searchable long-form Q&A. Use for: edge-case semantics.
- [nats.js issues](https://github.com/nats-io/nats.js/issues)
  No Discussions tab exists; client questions go here.

## Gaps

- Synadia Cloud specifics: server version, plan limits on streams and consumers, whether `$JS.EVENT.ADVISORY.>` capture is allowed per account. Not found in public docs. Ask in NATS Slack or Synadia support.
- Interest-retention behaviour after MaxDeliver is inferred from server code, not documented.
