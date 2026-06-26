# 0001 — Baseline and mission set

**Date:** 2026-06-25
**Status:** Active

## Context

First session on database connection pooling. Workspace was empty; established mission and taught Lesson 1.

## Mission established

Explain connection pooling **cold, from first principles, in an interview setting**, grounded in Django + PostgreSQL. See `MISSION.md`.

## Baseline (self-reported)

- **Driver:** interview / fundamentals — wants durable conceptual mastery, not a config fix.
- **Deployment context:** sync WSGI (Gunicorn / uWSGI, multi-process).
- **Postgres internals comfort:** *surface* — fuzzy on backend processes, `max_connections`, what a connection physically is.

## Decision: build bottom-up from the metal

Because the gap is DB internals (not programming), the course starts at the physical layer — what a connection *is* — rather than Django config downward. Django specifics come once the cost model is solid.

## Taught this session

- **Lesson 1 — What a Postgres connection actually costs.** Process-per-connection model; three costs (setup latency ~20–100 ms, idle memory ~5–10 MB, concurrency drag); the `max_connections` ceiling and the counter-intuitive throughput curve. Framed as the *setup* for why pooling exists.

## Not yet assessed

- Whether the learner can reproduce Lesson 1's recall items unprompted in a later session (test next session — spacing).
- Async / ASGI context deliberately out of scope per mission.

## Next zone of proximal development

Lesson 2: what a connection pool actually is — reuse, pool size, queueing. Direct payoff to Lesson 1.
