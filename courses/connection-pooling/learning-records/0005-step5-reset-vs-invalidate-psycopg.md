# 0005 — Lesson 3 Step 5 deepened: reset vs. invalidate (psycopg3)

**Date:** 2026-06-25
**Status:** Active — refines [0004](0004-lesson-3-connection-pool.md)

## Context

Learner asked whether the pool's Step 5 reset still happens if "the connection fails," then specifically asked for **psycopg/Postgres** behaviour, not SQLAlchemy. Good edge-case instinct — pressing on failure paths and on framework specifics.

## Correction made

Lesson 3 Step 5 originally said reset "rolls back the transaction and clears temporary session settings" — that framing came from SQLAlchemy and is **wrong for psycopg3's default**. Corrected.

## What was taught / folded into Step 5

- **Reset vs. invalidate** as the two return paths (decision-tree diagram). Failed *query* → reset; failed *connection* → invalidate (discard + replace, never clean a corpse).
- **psycopg3 default reset = `ROLLBACK` only.** Does NOT run `DISCARD ALL`, so session state (`SET`, prepared statements, temp tables, `LISTEN`) leaks to the next borrower unless a `reset=` callback runs `DISCARD ALL`. Flagged as a footgun with code.
- **Broken-connection detection:** optimistic (default, free) vs. pessimistic (`check=ConnectionPool.check_connection`, psycopg's `pool_pre_ping` equivalent, costs a round trip, on for failover-prone DBs). Plus `max_lifetime`/`max_idle` age recycling.
- Added recall items ③ (psycopg default reset) and ④ (reset vs invalidate on a dead connection).

## Sourcing note

Verified against psycopg3 docs (pool guide + pool API) via context7 + web — psycopg.org WebFetch was 403, so used the docs MCP. Source #4 added to the lesson.

## Glossary additions

Invalidate (vs reset), `DISCARD ALL`, Liveness check (`check`/pre-ping).

## Learner signal

Distinguishes framework-specific behaviour from general concept and wants the *actual* stack's truth (psycopg, since Django runs it). Keep grounding Django-side lessons in psycopg reality, not generic pool theory.

## Next ZPD

Unchanged: Lesson 4 — Django `CONN_MAX_AGE` + per-Gunicorn-worker connections. Note: Django ORM default uses NO pool — it uses persistent connections with its own `is_usable()` / `close_if_unusable_or_obsolete()` health checks; psycopg_pool only engages with Django 5.1+ `OPTIONS={"pool": True}`. Make that split explicit in Lesson 4.
