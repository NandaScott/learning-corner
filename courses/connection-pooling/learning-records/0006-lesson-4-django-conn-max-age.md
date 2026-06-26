# 0006 — Lesson 4: Django CONN_MAX_AGE & the per-worker trap

**Date:** 2026-06-26
**Status:** Active

## Context

Course reached the learner's real stack (sync Gunicorn + Django + Postgres). Lesson 3's seeded trap (total = pool_size × app_processes) pays off here.

## Taught this session (Lesson 4 — Django CONN_MAX_AGE and the per-worker trap)

Preferred flow (concept → numbered steps + per-step `h3` → "why this is a trap"):

- **Core reframe:** `CONN_MAX_AGE` is **persistent connections, NOT pooling**. One worker reuses one long-lived connection; no sharing, queue, or multiplexing. Cuts handshake cost (L1), does nothing for connection count (L2). This is the interview line.
- **Values:** `0` (default, close per request), `N` (reuse N s), `None` (forever).
- **Steps:** Gunicorn forks W independent worker processes (don't share memory → don't share connections) → lazy open → keep-on-request-end → reuse (+ optional `CONN_HEALTH_CHECKS` liveness ping, ties to L3's psycopg `check`) → expiry → every other worker does it independently.
- **The trap:** total backends ≈ W (sync) / W × threads (gthread) / × instances behind an LB. `CONN_MAX_AGE=None` + autoscaling pins idle backends → blows past `max_connections` (the L2 ceiling). Bigger CONN_MAX_AGE is the *wrong* fix; a pool below the workers (PgBouncer, L5) is the right one.
- **Django 5.1 `OPTIONS={"pool": True}`:** real psycopg3 pool, but still per-worker → W × pool_size. ASGI → disable CONN_MAX_AGE, use a pool.

## Grounding

Django docs (databases ref + settings ref) via context7; Heroku Dev Center + dev.to for worker arithmetic. Sources #1–2 in lesson.

## Glossary additions / refinements

`CONN_HEALTH_CHECKS`, `OPTIONS={"pool": True}`; sharpened *persistent connection* and `CONN_MAX_AGE` to stress "not a pool / doesn't reduce count."

## Next ZPD

Lesson 5 — PgBouncer (the pool *below* all workers/instances) + pooling modes (session / transaction / statement) and what each mode breaks (e.g. transaction mode vs. prepared statements / session-level features). This is the structural fix to Lesson 4's trap and the natural course finale on the knowledge side.
