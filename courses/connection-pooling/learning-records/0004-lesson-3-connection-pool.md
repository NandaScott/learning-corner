# 0004 — Lesson 3: What a connection pool is

**Date:** 2026-06-25
**Status:** Active

## Context

Learner completed and approved restructured Lessons 1–2 (mechanism → cost), asked to proceed to the pool lesson.

## Taught this session (Lesson 3 — What a connection pool actually is)

Followed the learner's preferred flow (concept → numbered map → per-step `h3` → "why this works"):

- **Concept:** a pool = borrow/return a fixed set of pre-opened connections, not create/destroy per request. Diagram contrasting with/without pool.
- **Steps:** init → acquire (check out) → idle/queue/timeout → use → reset → release (check in). Per-step explanations + lifecycle diagram.
- **Why it works:** maps directly back to Lessons 1 & 2 — reuse kills setup cost; pool size caps backends so you stay on Lesson 2's good part of the throughput curve. Framed as **decoupling request concurrency from connection concurrency** (the interview line).
- **Pool sizing:** `(cores × 2) + spindles` rule of thumb, explicitly tied back to "bigger ≠ better" from Lesson 2.
- **The trap (deliberate bridge to Lesson 4):** total DB load = `pool_size × app_processes`. Twenty Gunicorn workers × pool of 20 = 400 connections. This is the multi-process Django footgun.

## Glossary additions

Check out / check in, connection reset, checkout timeout, pool exhaustion.

## Pedagogical notes

- Reused the same source-cited, callout/recall structure. SQLAlchemy pooling docs chosen as primary source (clearest universal model, even though Django ORM ≠ SQLAlchemy — flagged that explicitly).
- The Lesson 3 trap is seeded specifically to make Lesson 4 (`CONN_MAX_AGE` + per-worker connections in sync Gunicorn) land — it's the learner's actual deployment context per the mission.

## Next zone of proximal development

Lesson 4 — Django's own persistent connections (`CONN_MAX_AGE`), and why every Gunicorn worker holds its own connections (not shared). This is where the course meets the learner's real stack.
