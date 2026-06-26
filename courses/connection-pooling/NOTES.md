# Teaching notes — connection pooling

> General teaching preferences and how this learner learns now live in the repo-root `CLAUDE.md` (cross-topic). This file holds only what's specific to the connection-pooling course.

## Topic grounding
- Works in Django + Postgres day to day — real working context, not abstract. The gap is *DB internals*, not programming.
- **Interview framing.** Mission is explain-it-cold. Every lesson carries an "interview line" (the crisp soundbite) and a "trap" (deep vs shallow answer). The learner liked these as the spine.
- **Bottom-up.** Started at *surface* level — built from the metal (what a connection physically is) up to Django config, not the reverse.
- Sync WSGI (Gunicorn) is the deployment context — keep Django lessons grounded there. Connections live per-worker-process, not shared.
- psycopg/Postgres behaviour specifically (the learner rejected a SQLAlchemy-framed answer) — teach the real stack.

## Course style
- Recurring callout classes: `.callout.interview` (blue, the soundbite), `.callout.gotcha` (amber, the trap), `.recall` (dashed, retrieval practice).
- Glossary at `reference/glossary.html` is canonical vocabulary — adhere to it in every lesson.

## Lesson order (reordered — see learning record 0003)
- **L1 — The connection handshake** (fork, SCRAM, context-switch). DONE.
- **L2 — What a connection costs at scale** (three costs, ceiling, throughput curve). DONE.
- **L3 — What a connection pool *is*** (reuse, lifecycle, pool size, queueing). DONE.
- **L4 — Django `CONN_MAX_AGE` + per-worker trap** (persistent ≠ pool; W workers = W pinned backends). DONE.
- **L5 — PgBouncer + pooling modes** (fleet-wide pool; session/transaction/statement; what transaction mode breaks; Django wiring). DONE — core arc complete.
- **L6 — Interleaved review quiz** (`lessons/0006-interleaved-review.html`, 17 Qs across all 5 lessons, shuffled).

## Mission status: knowledge-side COMPLETE
All 5 success criteria covered. Pivot from acquisition → **durability** (storage strength):
- **Built:** printable decision cheat-sheet → `reference/decision-cheat-sheet.html` (layer picker, 3-option compare, mode picker, Django recipes, numbers-to-memorize, footguns). Linked from glossary + L5.
- **Built:** interleaved mixed-quiz (L6) on the reusable `assets/quiz.js` engine — reuse for any future quiz, don't re-author.
- **Spacing TODO (the real durability test):** have learner clear L6 cold across ≥2 sessions, days apart. Watch L1–L2 (taught first) + psycopg/txn-mode nuances for decay and the fluency illusion. Same lesson missed twice → re-explain a *different* way, don't just repeat.
- **Wisdom (not started):** RESOURCES has community placeholders (r/PostgreSQL, r/django, pgsql lists). Raise when the learner wants to pressure-test explanations on real practitioners.
- Optional new content if asked: Django 5.1 native psycopg3 pooling deep-dive; async/ASGI pooling (out of original mission scope).

## Meta decisions
- General teaching prefs were hoisted to repo-root `CLAUDE.md` (2026-06-26) so every course inherits them. Still repo-local — consistent with the learner declining *global* `~/.claude` memory. This NOTES is connection-pooling only.
- Connection-pooling topic considered **complete** by the learner (2026-06-26). Remaining work is durability (spacing/retest) + optional wisdom, not new content.
