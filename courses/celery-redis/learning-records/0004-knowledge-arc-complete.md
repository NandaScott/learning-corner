# 0004 — Knowledge arc complete (L1–L7)

**Date:** 2026-06-26
**Status:** active

## What's done

The seven-lesson knowledge arc is built, in dependency order, each verified against kombu source + Celery docs (never parametric memory):

1. **L1** — a task is a message in a Redis list (LPUSH/BRPOP, the envelope)
2. **L2** — the worker pipeline (Consumer → Request → Timer/Pool → child over a pipe; prefetch ≠ concurrency; separate result backend)
3. **L3** — task lifecycle (before_start→run→state→on_*→after_return; IGNORE_STATES; state written before handler)
4. **L4** — signals timeline + process-locality (producer / main / child; task_postrun always fires)
5. **L5** — emulated acks (BRPOP destructive → `unacked` hash + `unacked_index` ZSET; ack=ZREM+HDEL)
6. **L6** — visibility timeout (10s restore loop, now−3600 cutoff, mutex, clean-shutdown vs hard-kill, ETA duplicate trap)
7. **L7** — acks_late / at-least-once / idempotency (the one boolean; no exactly-once; edge knobs)

Each lesson carries the interview-line + trap + recall spine. Glossary is canonical across all seven. Overview re-grouped (metal / lifecycle / reliability), index hub card updated to "7 lessons."

## Mission status

All five success criteria from MISSION.md are covered. The original focus ("how Redis stores the queue") is fully delivered and extended through delivery guarantees. **Knowledge side: done.**

## Pivot: acquisition → durability

Per the teaching philosophy (storage strength > fluency) and the connection-pooling precedent, the next phase is durability, not new content:

- **Interleaved review quiz** across all 7 lessons — the first real retrieval practice in this course. Reuse `assets/quiz.js` (do NOT re-author); follow the repo quiz convention (4 opts, opt[0] correct, opt[1] near-miss, shuffled). This is the recommended next build.
- Optional **printable cheat-sheet** (Tufte, like connection-pooling's decision-cheat-sheet) once the quiz is in.
- **Spacing**: have the learner clear the quiz cold across ≥2 sessions, days apart. Watch L3/L4 (lifecycle/signals — dense, taught mid-arc) and the L6 ETA-trap / L7 edge-knobs for decay and the fluency illusion. Missed twice → re-explain a different way.

## Dangling threads (learner may pull)

Dead-letter patterns on Redis; the reliable-config checklist; RabbitMQ-vs-Redis contrast (native acks change everything). Plus retry mechanics (max_retries/countdown/autoretry_for) never got its own lesson — candidate if asked.
