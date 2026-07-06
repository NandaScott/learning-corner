# 0007 — Strict CSP: nonces + 'strict-dynamic' (L7)

**Date:** 2026-07-06
**Status:** active

## Built

**L7 — Strict CSP.** The payoff lesson. Inverts the model: trust emitted scripts, not origins. Converges L2 (nonces) + L4 (object-src/base-uri) + L6 (allowlist failure).

## Facts verified (web.dev strict-csp + W3C CSP3)

- Recommended core: `script-src 'nonce-{RANDOM}' 'strict-dynamic'; object-src 'none'; base-uri 'none';`
- Backwards-compatible: `script-src 'nonce-{RANDOM}' 'strict-dynamic' https: 'unsafe-inline';` — CSP3 uses nonce+strict-dynamic (ignores https:/unsafe-inline); CSP2 uses https: allowlist (ignores unsafe-inline, nonce present); CSP1 honours unsafe-inline.
- `'strict-dynamic'`: **allows** programmatically-created script (`document.createElement('script')` by a trusted script — trust propagates); **blocks** parser-inserted script (document.write, injected/innerHTML markup w/o nonce). And **ignores** host-source/scheme-source/`'self'`/`'unsafe-inline'` in that directive.
- Why it kills L6: no host allowlist left to abuse (JSONP/redirect/gadget all needed an allowlisted domain).
- `object-src 'none'` = plugin vectors; `base-uri 'none'` = `<base>` hijack. Neither covered by script-src / default-src.
- Costs: inline handlers → `addEventListener` in nonced script; `eval` blocked (add `'unsafe-eval'` to weaken, better refactor to `JSON.parse`); DOM-XSS residue → Trusted Types (L4).

## Teaching spine

- Interview core = programmatic-vs-parser-inserted distinction + "ignores the allowlist" (the sentence connecting back to L6).
- Honest ceiling: doesn't fix retained `'unsafe-eval'`, DOM-XSS in trusted code, non-script issues.

## Next

L8 — reporting & rollout (final lesson): `Content-Security-Policy-Report-Only`, `report-uri` (deprecated) vs `report-to` + Reporting API, violation report shape, report-only → enforce, dual-header serving. Then review quiz (reuse assets/quiz.js) to close the arc.
