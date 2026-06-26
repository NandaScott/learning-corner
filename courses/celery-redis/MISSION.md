# Mission

**Be able to explain Celery's worker model — and specifically how the Redis broker physically stores and hands out work — cold, from first principles, in an interview setting.**

## Why this mission

The user is preparing to discuss Celery at an **interview / fundamentals** level, in the same mould as the connection-pooling course. The goal is not to ship a config change; it is *durable conceptual mastery* — explain the mechanism, the trade-offs, and the failure modes without notes, and survive the "why" follow-ups.

The chosen focus is the part most people wave their hands at: **what Redis actually does as a broker.** Redis is not a queue product — it's a key-value store with a few useful data structures. Celery (via kombu) builds a reliable-ish work queue *on top of* those primitives. The interesting story is how.

## Grounding constraints

- **Broker:** Redis specifically (not RabbitMQ/AMQP). The whole arc is about how kombu's Redis transport emulates queue/ack semantics that Redis doesn't natively provide.
- **Stack:** Celery + Redis inside a Django app — the user's real working context.
- **Starting level:** has *used* Celery (`@task`, `.delay()`, running workers) but the internals — how the broker stores a message, prefetch, ack emulation, visibility timeout — are **fuzzy**. So the course skips "what is a task queue" and goes straight at the mechanism, bottom-up from the Redis data structures.

## What "success" looks like

The user can, unprompted, walk an interviewer through:
1. What physically lands in Redis when you call `.delay()` — the message, the list. *(Lesson 1)*
2. How a worker pulls work — `BRPOP`, fair rotation across queues, prefetch. *(Lesson 2)*
3. Why Redis has no real "ack" and how kombu **emulates** it — the `unacked` hash + `unacked_index` sorted set. *(Lesson 3)*
4. The **visibility timeout** — how lost work comes back, the 1-hour default, and the duplicate-execution trap. *(Lesson 4)*
5. `acks_late`, at-least-once delivery, idempotency — the guarantees you actually get and the trade-offs. *(Lesson 5)*

## Notes for the teacher

- Interview framing → every lesson carries the **interview line** (the crisp soundbite) and the **trap** (deep vs shallow answer). Same spine the learner liked in connection-pooling.
- Teach the **real kombu/Redis behaviour**, verified against source — not generic "message queue" theory. Flag explicitly where the abstraction (AMQP-style broker) differs from what Redis actually does.
- Prioritise *storage strength* (recall) over fluency. Retrieval practice + spacing across sessions.
