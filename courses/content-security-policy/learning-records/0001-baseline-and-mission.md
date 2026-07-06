# 0001 — Baseline and mission

**Date:** 2026-07-01
**Status:** active

## Mission (as set this session)

Explain CSP cold at interview depth — the browser-side enforcement model, the full directive map, the **CSP1 → CSP2 → CSP3** evolution, and why most real-world policies fail to stop XSS. History of changes and "each of the directives" are explicit, first-class asks.

## Baseline (from mission-discovery questions)

- **Goal:** interview / deep understanding — same framing as connection-pooling and Celery courses (key line + trap per lesson).
- **Level:** **comfortable, wants internals.** Has written non-trivial policies; `default-src`/`script-src` known; wants the mechanism, the level history, and the sharp edges.
- **Explicit asks:** the CSP1/2/3 history, and each directive. Both treated as first-class subjects.

## Zone of proximal development

Skip "what is a header / what is CSP" 101. Start at the **evaluation model** (per-fetch governing-directive lookup + fallback chain + source-list match) — precise enough for an internals learner — then source-list grammar, the directive catalogue, the three-level history, and the strict-CSP endgame.

## Decisions

- Reuse repo-root `assets/course.css` + `quiz.js`/`quiz.css` as-is; no per-course re-theme (hub consistency).
- Full 8-lesson arc mapped in NOTES.md + overview; build one lesson per session.
- Every claim verified against W3C CSP 1.0 / L2 / L3, MDN, and Google's strict-CSP research (see RESOURCES). Notably confirmed this session: CSP2 introduced nonces/hashes/`child-src`/`frame-ancestors`/`form-action`/`base-uri`/`plugin-types`; CSP3 added `'strict-dynamic'`/`'unsafe-hashes'`/`report-to`/`worker-src`/`manifest-src`/the `*-src-elem`/`*-src-attr` split and rebased the whole spec on Fetch; origin = prefixed `X-Content-Security-Policy`/`X-WebKit-CSP` (2011) → CSP 1.0 W3C CR 2012.

## This session

- Scaffolded course; wrote MISSION/NOTES/RESOURCES, seeded glossary.
- Built **L1 — How the browser evaluates a policy.**
- Next: L2 (source-list grammar) unless redirected.
