# 0002 — Redirect: wanted the architecture overview, not deeper Redis

**Date:** 2026-06-26
**Status:** active

## What happened

After L1 (a task is a message in a Redis list), I offered to go *deeper into Redis* — the ack/visibility-timeout machinery. The learner redirected:

> "What I needed was a higher level overview of how celery interacts with redis. I have enough from this lesson about redis, what I want to see next is what celery does to get the task from redis and where it passes it next."

## The lesson (for ZPD calibration)

- The stated focus in mission discovery ("how Redis stores the queue") was the *entry point*, not the whole appetite. Once the learner had the storage model (one lesson), the want shifted to the **end-to-end architecture** — the component pipeline and data handoffs — over more depth on any single Redis primitive.
- For this learner, "I have enough about X" is a real signal — pivot to the next layer rather than mining the current one. They want **connected models** (where does it go next?) more than exhaustive depth on one node.

## Action taken

- Built **L2 — How the worker gets the task, and where it goes next** as a higher-level architecture lesson: Consumer → Request → Timer/Pool → child process over a pipe; prefetch vs concurrency; separate result backend.
- Re-sequenced the arc: the ack/visibility-timeout machinery (old L3/L4) is still valuable but now offered as *optional depth* the learner can pull on, not the assumed next step. Don't push deeper-into-Redis unless they ask.

## Next

- Let the learner steer. Likely candidates: (a) the ack/restore machinery now that they've seen the pipeline, (b) result backend mechanics, (c) failure/retry flow, or (d) wrap with a review quiz. Ask, don't assume depth.
