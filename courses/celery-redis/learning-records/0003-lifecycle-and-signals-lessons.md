# 0003 — Lifecycle + signals lessons (learner-requested)

**Date:** 2026-06-26
**Status:** active

## Request

> "Could we have two lessons about celery signals and task lifecycles? I'd like to know exactly when each signal is called and when each method is called for a task. Slot those into the lesson order where they make sense."

## Decision: placement

Slotted as **L3 (task lifecycle: methods + states)** and **L4 (signals timeline)**, immediately after L2 (the worker pipeline). Rationale: L2 ends at "the child runs your function"; L3 opens that single step (the tracer's method sequence), and L4 overlays the signal timeline on L1–L3. Signals reference lifecycle points, so lifecycle precedes signals.

The previously-planned reliability machinery (acks emulation / visibility timeout / acks_late) shifted to **L5–L7** and is now framed as **optional depth** (consistent with record 0002 — don't push deeper-Redis unless asked).

## Verified before writing (NOT from memory)

Authoritative order pulled from `celery/app/trace.py` (build_tracer/trace_task) + the signals reference:
- task_prerun → before_start() → run() → mark_as_*(state) → on_success/on_retry/on_failure → task_success/task_retry/task_failure → after_return() [terminal only] → task_postrun [always].
- `after_return` skipped for `IGNORE_STATES = {RETRY, IGNORED, REJECTED}`; `task_postrun` fires on **all** outcomes incl. retry.
- State recorded **before** the outcome handler (result visible when on_success runs).
- Signal process-locality: publish→producer, task_received→main worker proc, execution signals→child; worker_process_init/_shutdown per forked child.

These "exactly when" specifics are the spine of both lessons (matches the learner's mechanism-depth + edge-case appetite).

## Built

- `lessons/0003-the-task-lifecycle.html`, `lessons/0004-celery-signals-timeline.html`.
- Glossary extended: worker anatomy (L2), task lifecycle (L3), signals (L4) sections — now canonical.
- Overview re-grouped into Part 1 (metal), Part 2 (execution lifecycle), Part 3 (reliability — optional). Fixed stale L2 forward-refs that pointed "Lesson 3" at acks.

## Next

- Learner steers: L5+ reliability machinery, a review quiz over L1–L4 (storage-strength — first quiz in this course), or retry mechanics (max_retries/countdown/autoretry_for). Ask.
