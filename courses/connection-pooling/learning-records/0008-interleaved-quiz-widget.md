# 0008 — Lesson 6: interleaved quiz + reusable quiz widget

**Date:** 2026-06-26
**Status:** Active

## Context

Knowledge-side mission complete (record 0007). Pivoted to durability/storage strength. Built the interleaved mixed-quiz the learner asked for.

## Built

- **Reusable component** `assets/quiz.js` + `assets/quiz.css`: a quiz engine. Takes a question array, shuffles question order AND option order each run, one-at-a-time with immediate auto-feedback, running score, progress bar, end screen that names the lessons to review, and shuffle-&-retry. First interactive/skills component in the workspace (prior lessons were knowledge + static recall widgets).
- **Lesson 6** `lessons/0006-interleaved-review.html`: 17 questions interleaved across all 5 lessons. Framed explicitly around desirable difficulty (interleaving + spacing + retrieval), citing retrievalpractice.org.

## Design choices

- Questions test the *interview-line / trap* concepts, not trivia: process-per-connection, fork cost, context-switch (what's destroyed), max_connections curve, pool decoupling, psycopg ROLLBACK-only default, reset vs invalidate, CONN_MAX_AGE-isn't-pooling, per-worker count, 5.1 per-worker pool, PgBouncer fleet-wide, transaction-mode breakage cause, DISABLE_SERVER_SIDE_CURSORS, session-mode return timing.
- Distractors kept parallel in length/structure per question (CLAUDE skill rule: don't leak the answer via formatting).
- Fixed a widget bug pre-ship: wrong-clicked button was detected via `document.activeElement`, but disabling buttons dropped focus first → passed the clicked button reference in directly instead.

## This is a SKILLS lesson, not knowledge

First feedback-loop lesson. Difficulty is the tool here (vs knowledge lessons where difficulty is the enemy). No new facts introduced.

## Next ZPD — durability over time

- **Spacing:** the real test is clearing this cold across ≥2 sessions days apart. Watch especially L1–L2 (taught first) and the psycopg/transaction-mode nuances (most likely to decay).
- If the learner misses the same lesson twice, re-explain that concept a *different* way (per the lesson's ask-teacher prompt), don't just repeat.
- **Wisdom (still not started):** RESOURCES community placeholders remain. Offer when the learner wants to pressure-test explanations on practitioners (r/PostgreSQL, r/django, pgsql-general).
- Optional new content only if asked: Django 5.1 native pool deep-dive, async/ASGI pooling.
