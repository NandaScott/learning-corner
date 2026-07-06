# 0008 — Reporting & rollout + course complete (L8 + quiz)

**Date:** 2026-07-06
**Status:** active

## Built

**L8 — Reporting & rollout** (final lesson) + **the interleaved review quiz** (0009). Course arc L1–L8 complete.

## Facts verified this session (MDN report-to / CSP-Report-Only / CSPViolationReport)

- `Content-Security-Policy-Report-Only` — evaluates the same policy but **blocks nothing**; only emits violation reports. Both headers can be sent at once (enforce loose + report-only strict).
- Violation report fields: `effectiveDirective`, `blockedURL`, **`disposition`** (`"enforce"`|`"report-only"`), `documentURL`, `originalPolicy`, `sourceFile`/`lineNumber`/`columnNumber`, `statusCode`, `referrer`, `sample` (only if `'report-sample'` set). Plus in-page `securitypolicyviolation` DOM event.
- **`report-uri`** (CSP1, deprecated): direct POST, `application/csp-report`, `{"csp-report":{...}}`, hyphenated keys (document-uri/violated-directive/blocked-uri).
- **`report-to`** (CSP3): names a group via `Reporting-Endpoints` header; Reporting API; `application/reports+json`; camelCase. **Browsers that support `report-to` IGNORE `report-uri`** — send both in transition. `report-to` inert without `Reporting-Endpoints`.
- Rollout playbook: Report-Only → triage (filter un-ownable extension noise) → fix your own violations (nonce/hash/refactor, don't widen) → enforce → keep a Report-Only for the next tightening.

## Quiz

- 20 Qs, 2–3 per lesson, interleaved. Reuses `assets/quiz.js`/`quiz.css` unchanged. `options[0]`=correct, `[1]`=near-miss, `answer:0`; engine shuffles display order. Answer lengths balanced to avoid leaking.

## Course status

**COMPLETE — L1–L8 built, quiz built, 2 reference docs (glossary + fallback cheat sheet), registered in hub.** Now in durability/spacing phase: don't re-teach the arc; drive retrieval practice, spacing across sessions, and answer edge-case follow-ups. Offer a concrete stack-specific deploy walkthrough or deep-dives on request.

## Possible future extensions (only if asked)

- Trusted Types deep-dive (own lesson) — currently only introduced in L4.
- Hash-based strict CSP for static sites (vs nonce) — mentioned in L7, not drilled.
- A concrete end-to-end deploy walkthrough (framework nonce injection, report endpoint).
