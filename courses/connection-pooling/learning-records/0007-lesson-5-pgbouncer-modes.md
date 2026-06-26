# 0007 — Lesson 5: PgBouncer & pooling modes (core arc complete)

**Date:** 2026-06-26
**Status:** Active

## Context

Final lesson of the knowledge-side core arc. Resolves Lesson 4's per-worker trap structurally.

## Taught this session (Lesson 5 — PgBouncer and pooling modes)

Preferred flow (concept → steps → why it works + trade-offs + Django wiring):

- **Concept:** PgBouncer = external, single-process, event-driven pooler below the *whole fleet* (all workers + instances). Multiplexes thousands of cheap client conns onto a small fixed set of real backends → decouples Postgres backend count from app process count globally. Diagram contrasts L4 per-worker vs L5 fleet-wide.
- **Steps:** clients connect to PgBouncer → backend assigned from small pool → queries → returned (timing = `pool_mode`) → Postgres only ever sees pool_size backends.
- **Pooling modes table:** session (return on disconnect, full compat) / transaction (return at COMMIT/ROLLBACK, best multiplexing, the web-app default) / statement (per statement, autocommit-only). What transaction mode breaks and the *one reason*: consecutive txns may land on different backends → session-scoped state dies (prepared statements, SET, LISTEN/NOTIFY, advisory locks, server-side cursors).
- **Django wiring for transaction mode:** `CONN_MAX_AGE=0` (don't double-pool), `DISABLE_SERVER_SIDE_CURSORS=True` (Django #28062 / `.iterator()`), psycopg3 `prepare_threshold=None`.
- **Synthesis box — "whole course in one breath":** L1 process → L2 ceiling/curve → L3 pool → L4 per-worker limit → L5 fleet-wide pool. Ties the arc together for interview recall.

## Grounding

PgBouncer features page, JP Camara "fraught with peril", Django docs (transaction pooling & server-side cursors) + ticket #28062. Verified mode break-list via web search.

## Glossary additions / refinements

Multiplexing, Session/Transaction/Statement pooling (split out), `DISABLE_SERVER_SIDE_CURSORS`; sharpened PgBouncer + Pooling mode entries.

## Status of the mission

Knowledge-side coverage of the mission's 5 success criteria is now COMPLETE (cost → ceiling → pool → Django CONN_MAX_AGE → external pooler/modes/trade-offs). What remains is **storage strength**, not new knowledge.

## Next ZPD — shift from acquisition to durability

Per the mission (interview fluency = storage strength, not fluency illusion), next sessions should pivot to **retrieval + interleaving + spacing**, not new content:
- Offered: a one-page printable **decision cheat-sheet** (CONN_MAX_AGE vs Django native pool vs PgBouncer; mode selection) — high-value reference per skill philosophy.
- Offered: an **interleaved mixed-quiz** across all 5 lessons (desirable difficulty).
- Spacing: re-test Lesson 1–2 recall items cold in a later session (they were taught first; check retention).
- Wisdom: not yet pursued — RESOURCES has placeholder communities (r/PostgreSQL, r/django, pgsql mailing lists) for pressure-testing explanations. Raise when learner wants real-world validation.
