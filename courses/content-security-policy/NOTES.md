# Notes — CSP course

Working notes + the planned arc. Topic-specific; cross-topic preferences live in the repo `CLAUDE.md`.

## Learner shape (this course)

- Mission: **interview-grade depth + internals.** Wants the mechanism, the CSP1/2/3 history, and the sharp edges — not "how do I add a header."
- Baseline: **comfortable, wants internals.** Has written non-trivial policies; `default-src`/`script-src` are known. Start at the evaluation model, not the basics.
- Explicit asks: **the history of the changes** (CSP1 vs 2 vs 3) and **each of the directives.** Both are first-class subjects here.

## Lesson spine (same as prior courses, learner liked it)

Each lesson: concept plainly → numbered step overview diagram → one short `h3` per step → synthesis → **key line** + **trap** + **recall** widget. Cite a single best primary source per lesson.

## Planned arc

**Part 1 — The evaluation model**
- L1 — How the browser evaluates a policy (governing directive → `default-src` fallback → source-list match → allow/block). *(built)*
- L2 — The source-list grammar: keywords, scheme/host sources, wildcards, path matching + the redirect path-ignore rule, nonce-source, hash-source. *(built)*

**Part 2 — The directive map**
- L3 — Fetch directives + the full fallback cascade (`script-src-elem`/`-attr`, `style-src-*`, `default-src` → `child-src` → `frame-src`/`worker-src`). *(built)*
- L4 — Beyond fetch: document (`base-uri`, `sandbox`), navigation (`form-action`, `frame-ancestors` vs `X-Frame-Options`), and the riders (`upgrade-insecure-requests`, `block-all-mixed-content`, Trusted Types). *(built)*

**Part 3 — The three levels (explicit ask)**
- L5 — CSP1 vs CSP2 vs CSP3: origin (prefixed headers → 1.0/2012), what each added and why, deprecations/removals. *(built)*

**Part 4 — Making CSP actually stop XSS**
- L6 — Why host allowlists fail: JSONP endpoints, open redirects, path relaxation, framework gadgets (the Google CCS 2016 research). *(built)*
- L7 — Strict CSP: nonces + `'strict-dynamic'` + hashes; how `'strict-dynamic'` propagates trust and neuters the host allowlist; `object-src 'none'`, `base-uri 'none'`. *(built)*

**Part 5 — Operating it**
- L8 — Reporting & rollout: `Content-Security-Policy-Report-Only`, `report-uri` (deprecated) vs `report-to` + Reporting API, the violation report shape, report-only → enforce, dual-header serving. *(built)*
- Review quiz (reuse `assets/quiz.js`) *(built — 0009)* + directive cheat-sheet reference *(built)*.

**STATUS: course COMPLETE (L1–L8 + quiz + 2 refs). Durability/spacing phase — don't re-teach the arc.**

## Decisions

- Reuse repo-root `assets/course.css` + `quiz.js`/`quiz.css` as-is; no per-course re-theme (hub stays consistent).
- Build one lesson per session; the overview shows the full map so the learner sees where it's going.
- Glossary is canonical once created — adhere to its wording in every lesson.

## Precision watch-list (things easy to get wrong from memory — always verify)

- `upgrade-insecure-requests` and `block-all-mixed-content` are defined in *separate* specs but delivered via the CSP header. `block-all-mixed-content` is deprecated (upgrade covers it).
- `report-uri` is deprecated in favour of `report-to`, but `report-to` needs the Reporting API and browser support lagged — real deployments still send both.
- `frame-ancestors` (CSP2+) supersedes `X-Frame-Options`; where both are present, behaviour can differ by browser.
- CSP2: insecure host-source `http://example.com:80` matches its secure `https://…:443` variant (scheme/port upgrade matching) — a CSP2 change, not CSP1.
- `'strict-dynamic'` *ignores* host/scheme allowlist entries in the same directive — it's not additive with them.
