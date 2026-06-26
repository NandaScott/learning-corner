# Mission

**Be able to explain database connection pooling cold — clearly, from first principles, in an interview setting — with Django + PostgreSQL as the concrete grounding.**

## Why this mission

The user is preparing to discuss connection pooling at an **interview / fundamentals** level. The goal is not to ship a config change; it is *durable conceptual mastery* — the kind where you can explain the mechanism, the trade-offs, and the failure modes without notes, and answer follow-up "why" questions.

## Grounding constraints

- **Deployment context:** traditional **sync WSGI** (Gunicorn / uWSGI, multi-process workers). This shapes every Django-specific lesson — connections live per-worker-process, not shared.
- **Database:** PostgreSQL specifically (process-per-connection model is central to the whole story).
- **Starting level:** *surface*. Fuzzy on backend processes / `max_connections` / what a connection physically is. So the course is built **bottom-up from the metal**, not from Django config downward.

## What "success" looks like

The user can, unprompted, walk an interviewer through:
1. What a Postgres connection physically is and why it's expensive. *(Lesson 1 ✓)*
2. What a connection pool is and the problem it solves.
3. Django's own persistent-connection mechanism (`CONN_MAX_AGE`) and the per-worker gotcha.
4. External poolers (PgBouncer), pooling modes, and when each matters.
5. The trade-offs and failure modes — and how to reason about the right `max_connections` / pool size.

## Notes for the teacher

- Interview framing means: every lesson should surface the **"interview line"** — the crisp way to say the key point — and the **trap** that distinguishes a deep answer from a shallow one.
- Prioritize *storage strength* (recall) over fluency. Use retrieval practice and spacing across sessions.
