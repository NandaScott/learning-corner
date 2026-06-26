# 0001 — Baseline and mission

**Date:** 2026-06-26
**Status:** active

## Mission (as set this session)

Explain Celery's worker model — and specifically **how the Redis broker physically stores and hands out work** — cold, interview-level, from first principles. Redis-broker focus; RabbitMQ/AMQP out of scope except as contrast.

## Baseline (from mission-discovery questions)

- **Goal:** interview cold-explain — same framing as the connection-pooling course (interview line + trap per lesson).
- **Level:** has *used* Celery (`@task`, `.delay()`, running workers); internals fuzzy — broker storage, prefetch, ack emulation, visibility timeout.
- **Focus chosen:** "how Redis stores the queue" — the actual data structures (lists, sorted sets), BRPOP, visibility timeout, what a message physically is. (Picked over "delivery guarantees" as the *entry* angle, but guarantees follow naturally in L3–L5.)

## Zone of proximal development

Skip task-queue 101. Start at the Redis metal (a message in a list) and build up to ack emulation and visibility timeout. Mirrors the connection-pooling bottom-up arc the learner responded well to.

## Decisions

- Reuse repo-root `assets/course.css` + `quiz.js` as-is; no per-course re-theme (hub stays consistent).
- Arc planned in NOTES.md (L1–L5 + review). Build one lesson per session.
- All broker internals verified against kombu source + Celery docs before teaching (see RESOURCES). Notably: visibility_timeout default **3600s**, `unacked` hash + `unacked_index` ZSET ack emulation, LPUSH/BRPOP on a list named `celery`.

## This session

- Scaffolded course; wrote MISSION/NOTES/RESOURCES, seeded glossary.
- Built **L1 — A task is a message in a Redis list.**
- Next: L2 (worker pull / BRPOP / prefetch) unless redirected.
