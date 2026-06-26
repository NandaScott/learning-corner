# Resources — Celery + Redis broker

Trusted sources for grounding lessons. Lessons cite these; never teach from parametric memory.

## Primary (highest-trust — the mechanism)

- **kombu Redis transport — source module** — <https://docs.celeryq.dev/projects/kombu/en/stable/_modules/kombu/transport/redis.html>
  The actual implementation. The `QoS` class (`append`/`ack`/`restore_visible`), the `unacked`/`unacked_index` keys, the `_brpop` consumption, `sep`/`priority_steps`. This is the ground truth for "how Redis stores the queue."
- **kombu Redis transport — reference** — <https://docs.celeryq.dev/projects/kombu/en/stable/reference/kombu.transport.redis.html>
  The documented transport options: `visibility_timeout`, `unacked_key`, `unacked_index_key`, `unacked_restore_limit`, `priority_steps`, `fanout_prefix`.
- **Celery docs — Backends and Brokers › Using Redis** — <https://docs.celeryq.dev/en/stable/getting-started/backends-and-brokers/redis.html>
  Visibility timeout (default **3600s**), caveats (ETA/countdown vs timeout), redelivery semantics, the "shortest timeout wins if shared" rule.

## Protocol / message shape

- **Celery docs — Internals › Message Protocol (v2)** — <https://docs.celeryq.dev/en/stable/internals/protocol.html>
  What a task message actually contains: `headers` (task name, id, args repr), base64 `body`, `properties` (delivery_info, delivery_tag, priority).

## Delivery guarantees / acks

- **Celery docs — Tasks › `acks_late` and idempotency** — <https://docs.celeryq.dev/en/stable/userguide/tasks.html#how-it-works>
  Early vs late ack, at-least-once delivery, why tasks must be idempotent under `acks_late`.
- **Celery docs — Optimizing › Prefetch limits** — <https://docs.celeryq.dev/en/stable/userguide/optimizing.html#prefetch-limits>
  `worker_prefetch_multiplier`, reserved-but-unacked messages, long-task starvation.

## Communities (for pressure-testing explanations — wisdom)

- r/django, r/Python — Celery questions are common; good for "is my mental model right" checks.
- Celery GitHub Discussions / Issues — <https://github.com/celery/celery/discussions> — maintainers answer mechanism questions; the kombu issue tracker is where visibility-timeout edge cases get debated.
- Stack Overflow `[celery]` `[python-redis]` tags — canonical Q&A for the duplicate-execution / lost-task war stories.
