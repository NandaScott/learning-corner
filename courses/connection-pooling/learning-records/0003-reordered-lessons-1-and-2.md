# 0003 — Reordered Lessons 1 and 2

**Date:** 2026-06-25
**Status:** Active — supersedes the ordering in [0001](0001-baseline-and-mission.md) and [0002](0002-handshake-deep-dive.md)

## Context

The learner judged the handshake material (originally Lesson 2) to be **more foundational** than the cost-at-scale material (originally Lesson 1), since the cost/ceiling story builds on knowing the mechanism. Asked to swap them.

## Decision

Swapped. New order:

- **Lesson 1 — The connection handshake** (`0001-the-connection-handshake.html`): mechanism. Process-per-connection fact, the no-pool sequence, the fork, SCRAM auth, context-switching internals.
- **Lesson 2 — What a connection costs at scale** (`0002-what-a-connection-costs.html`): consequence. Three costs totalled, `max_connections` ceiling, throughput curve, motivation for pooling.

This was a **content reframe, not a rename**: cross-references were rewritten so the narrative flows mechanism → consequence → pooling. The "process per connection" fact moved up to open Lesson 1; the context-switch deep-dive now sets up (rather than back-references) the throughput ceiling, which Lesson 2 then quantifies.

## Why it's a good call

Matches the course's bottom-up principle (start from the metal). The learner reasoning about lesson dependency order themselves is a positive signal — they're building a connected mental model, not collecting facts.

## Downstream effects

- Glossary lesson-tags renumbered to final order (handshake terms → L1; cost/ceiling → L2; pool → L3; Django `CONN_MAX_AGE`/WSGI worker → L4; PgBouncer/pooling modes → L5).
- Pool lesson is now **Lesson 3** (next), Django `CONN_MAX_AGE` → Lesson 4, PgBouncer → Lesson 5.

## Next zone of proximal development

Unchanged: Lesson 3 — what a connection pool actually is (reuse, pool size, queueing).
