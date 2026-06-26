# 0002 — Handshake deep-dive (Lesson 2)

**Date:** 2026-06-25
**Status:** Active

## Context

Right after Lesson 1, the learner asked three unprompted "why" follow-ups:
1. What is the connection setup process without pooling, in detail?
2. Why is context-switching bad?
3. What exactly is authentication?

These are precisely the interview follow-ups the mission targets. Signal: the learner instinctively drills into mechanism, not just config — good for the bottom-up approach.

## Decision: separate lesson, not an expansion of Lesson 1

Asked to "add this to the lesson." Chose to make it **Lesson 2 (its own file)** rather than bloat Lesson 1, to respect the course's working-memory budget (each lesson = one tightly-scoped win). The "what a pool is" lesson shifts from #2 to #3. Numbering stays sequential.

## Taught this session (Lesson 2 — The connection handshake)

- The full no-pool sequence (TCP → startup packet → **fork** → auth → backend setup → ReadyForQuery → close), with the fork named as the single most expensive step.
- Authentication demystified: `pg_hba.conf` method selection, SCRAM-SHA-256 4-message flow, costs = round trips + PBKDF2 hashing.
- Context-switching at the machine level: the switch is cheap; the **cache/TLB misses** it causes are the real cost. Plus `ProcArrayLock` contention. This closes Lesson 1's "throughput bends down" claim.
- New interview line + trap (trap = naming *what* the switch destroys, not just "it's slow").

## Glossary additions

fork, startup packet, SCRAM-SHA-256, `pg_hba.conf`, context switch, TLB.

## Next zone of proximal development

Lesson 3: what a connection pool actually is — reuse, pool size, queueing. The payoff now that the learner fully understands the cost being avoided.
