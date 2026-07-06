# 0005 — CSP1 vs CSP2 vs CSP3 (L5)

**Date:** 2026-07-06
**Status:** active

## Built

**L5 — CSP1 vs CSP2 vs CSP3.** The learner's original explicit ask. Told as an arc, not a list: each level exists because the previous one still let injected script run.

## Dates / status verified this session

- Origin: "Content Restrictions" proposal (Hansen, 2004); experimental prefixed headers `X-Content-Security-Policy` (Firefox) + `X-WebKit-CSP` (Chrome/Safari), 2011.
- **CSP 1.0** — Candidate Recommendation 15 Nov 2012 (`/TR/2012/CR-CSP-20121115/`). **Never reached full REC** — stalled at CR, superseded by L2.
- **CSP Level 2** — first full W3C **Recommendation, 15 Dec 2016** (`/TR/2016/REC-CSP2-20161215/`).
- **CSP Level 3** — still a Working Draft (first WD 2016-01-26), widely shipped.

## The arc (the teaching spine)

- CSP1 = allowlist origins. Hole: inline all-or-nothing (`'unsafe-inline'` also lets injected inline run); no framing directive.
- CSP2 = + nonces/hashes (trust specific inline blocks), `frame-ancestors`/`form-action`/`base-uri`/`child-src`/`plugin-types`, richer reports. Hole: host allowlists for external script empirically bypassable.
- CSP3 = + `'strict-dynamic'` (propagate trust, ignore host allowlist), `'unsafe-hashes'`, `report-to`, `worker-src`/`manifest-src`, `*-src-elem`/`-attr`, external-script hashes; rebased on Fetch; deprecates `plugin-types`/`block-all-mixed-content`; un-deprecates `frame-src`.

## History detail worth keeping

- `navigate-to` and `prefetch-src` were introduced in CSP3 drafts then **removed** — WD names aren't stable until shipped. Good "history of changes" example beyond additions.
- `upgrade-insecure-requests` + Trusted Types are separate specs riding the CSP header — don't slot into the per-level table.

## Next

L6 — why host allowlists fail (JSONP, open redirects, path relaxation, framework gadgets; Google CCS 2016 "CSP Is Dead, Long Live CSP"). L5 set this up explicitly.
