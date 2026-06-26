# Teaching notes — Celery + Redis broker

> Cross-topic teaching prefs + how this learner learns live in the repo-root `CLAUDE.md`. This file is Celery-specific only.

## Topic grounding
- **Interview framing.** Mission is explain-it-cold. Every lesson carries an "interview line" (soundbite) + a "trap" (deep vs shallow answer). Same spine as connection-pooling.
- **Bottom-up from the Redis metal.** Learner has *used* Celery but internals are fuzzy. Don't teach "what is a task queue." Start at what physically lands in Redis and build up to delivery guarantees.
- **Real kombu behaviour, verified against source** — not generic message-queue theory. The whole point: Redis isn't a queue; kombu emulates queue+ack semantics on top of plain Redis data structures. Flag where the AMQP abstraction ≠ what Redis actually does.

## Course style
- Reuses repo-root `assets/course.css` as-is (brick-red accent — kept consistent across the hub, not re-themed). Callout classes: `.callout.interview` (blue soundbite), `.callout.gotcha` (amber trap), `.recall` (dashed retrieval). Quiz uses `assets/quiz.js` — reuse, never re-author.
- Lesson shape (per CLAUDE.md): concept → numbered overview diagram + one h3/step → synthesis → interview line + trap + recall + primary source + ask-teacher + nav + sources.
- Glossary at `reference/glossary.html` is canonical vocabulary — adhere in every lesson.

## Verified facts (from kombu source + Celery docs — see RESOURCES)
- Queue = Redis **LIST** keyed by queue name (default `celery`). Produce = **LPUSH**, consume = **BRPOP** (blocking, fair-rotated across queues).
- Message = a **JSON envelope**; task name/id in `headers`, args/kwargs in base64 `body`, routing (exchange + routing_key) + `delivery_tag` in `properties`. (Celery protocol v2.)
- Redis has **no native ack**. kombu emulates: on delivery, copy message into `unacked` **HASH** (delivery_tag → payload) + `unacked_index` **ZSET** (delivery_tag scored by delivery timestamp). Ack = pipelined `HDEL` + `ZREM`.
- **Visibility timeout** default **3600s (1hr)**. `restore_visible`: `ceil = now − visibility_timeout`, `ZREVRANGEBYSCORE unacked_index` for entries older than ceil, re-LPUSH onto queue. Needs the worker event loop / periodic restore to fire; also restored on clean connection close (worker shutdown).
- Quasi-priorities: multiple lists per queue, separator `\x06\x16`, default `priority_steps [0,3,6,9]`. (Side note, not core arc.)

## Verified facts — lifecycle & signals (from trace.py + signals docs)
- Tracer (`celery.app.trace.build_tracer`) order, per outcome:
  - common: **task_prerun signal** → **before_start()** → **run()**
  - success: mark_as_done (**SUCCESS**) → **on_success()** → **task_success signal**
  - retry: mark_as_retry (**RETRY**) → **on_retry()** → **task_retry signal**
  - failure: mark_as_failure (**FAILURE**) → **on_failure()** → **task_failure signal**
  - trailing (finally): **after_return()** *iff* state ∉ `IGNORE_STATES = {RETRY, IGNORED, REJECTED}* → **task_postrun signal (ALWAYS sent, all outcomes)**
- Sharp edges (the "exactly when" wins): state written to backend **before** outcome handler (so result visible when on_success runs); `after_return` **skipped on RETRY**; `task_postrun` fires **even on retry**; `task_prerun` fires **before** `before_start`.
- `before_start` added 5.2, **blocks** run(). States: PENDING implicit, RECEIVED (consumer), STARTED only if `task_track_started`, SUCCESS/FAILURE/RETRY/REVOKED.
- Signal process-locality: before/after_task_publish → **producer**; task_received → **main worker proc**; task_prerun…postrun → **child**. worker_process_init/_shutdown fire **per forked child** (where to reopen DB conns). celeryd_init = first worker signal.

## Lesson arc (planned)
- **L1 — A task is a message in a Redis list.** `.delay()` → JSON envelope → LPUSH → list `celery` → BRPOP → worker. The broker is dumb storage. **BUILT.**
- **L2 — How the worker gets the task, and where it goes next.** Higher-level architecture: MainProcess/Consumer → Request → Timer vs execution Pool → child process over a pipe; prefetch (mult default **4**) ≠ concurrency; result backend is separate from broker. **BUILT.** (Learner redirected here: wanted the higher-level Celery↔Redis flow + "where does it pass next," not deeper Redis internals — see learning record 0002.)
- **L3 — The task lifecycle: which method runs when.** Tracer order (before_start→run→state→on_*→after_return), state machine, retry = re-delivery, the IGNORE_STATES / "result visible before on_success" traps. **BUILT** (learner-requested).
- **L4 — Signals: exactly when each fires.** Full timeline + process-locality (producer/main/child), worker-lifecycle group, task_postrun-vs-after_return distinction. **BUILT** (learner-requested).
- **L5 — Acks are emulated: the in-flight ledger.** BRPOP destructive → QoS.append HSET `unacked` + ZADD `unacked_index`; ack = pipelined ZREM+HDEL; reject/restore = LPUSH to head. Default acks_late=False (ack BEFORE run). Ledger = only home of an in-flight msg → basis of crash recovery. **BUILT.**
- **L6 — Visibility timeout: how lost work comes back.** `call_repeatedly(10, maybe_restore_messages)` (every 10s); ceil=now−visibility_timeout (def 3600); ZREVRANGEBYSCORE unacked_index; restore_by_tag→LPUSH; Mutex(unacked_mutex_key) so one worker restores. restore_at_shutdown=True → clean shutdown re-queues immediately; hard kill waits out timeout. ETA/countdown > visibility_timeout → duplicate execution (the infamous trap). **BUILT.**
- **L7 — acks_late + at-least-once + idempotency.** acks_late picks the guarantee (False=ack-before=at-most-once; True=ack-after=at-least-once). No exactly-once (ack + side-effect not atomic across a crash). Edge knobs: acks_on_failure_or_timeout (def True → failures still ack), reject_on_worker_lost (def False → OOM child acked not redelivered). At-least-once ⇒ idempotency mandatory. **BUILT — arc complete.**
- **L8 — Interleaved review quiz.** 19 Qs across L1–L7, reuses `assets/quiz.js` (not re-authored); opt[0] correct, opt[1] near-miss, shuffled. **BUILT.** Reference cheat-sheet still TODO (optional).

## Status
- **Knowledge arc COMPLETE: L1–L7 built.** list → worker pipeline → lifecycle → signals → ack ledger → visibility-timeout restore → delivery guarantee. Glossary canonical across message/Redis-ops/worker-anatomy/lifecycle/signals/delivery-guarantees.
- **Pivot to durability** (storage strength). Zero retrieval practice banked beyond per-lesson recall widgets. Next move offered: interleaved review quiz across all 7 (reuse `assets/quiz.js`, do NOT re-author; quiz convention in repo CLAUDE.md — opt[0] correct, opt[1] near-miss, shuffled). Then optional reference cheat-sheet (Tufte, printable) like connection-pooling has.
- Threads left dangling for the learner to pull: dead-letter patterns on Redis; reliable-config checklist (acks_late + prefetch=1 + visibility_timeout > slowest task); RabbitMQ-vs-Redis (native acks change the whole story).
- Mission considered focused on the Redis-broker mechanism; RabbitMQ/AMQP explicitly out of scope (used only as contrast).
