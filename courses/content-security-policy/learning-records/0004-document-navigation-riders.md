# 0004 — Document, navigation & riders (L4)

**Date:** 2026-07-06
**Status:** active

## Built

**L4 — Document, navigation & riders.** The non-fetch directives that `default-src` never backstops. Completes the directive catalogue (L1–L4 = the full map).

## Facts verified this session

- **`base-uri`** — closes `<base href>` hijack (injected `<base>` redirects relative script/resource URLs; `script-src 'self'` checked *after* resolution, so it passes). Strict CSP pins `base-uri 'none'`. No default-src fallback. (CSP3 §6.2)
- **`sandbox`** — token-valued (NOT a source list); same tokens as `<iframe sandbox>` applied to own doc. Bare = max restriction. (CSP3 §6.4)
- **`form-action`** — form submission targets; `connect-src`/`default-src` don't cover form navigation. (CSP3 §6.3)
- **`frame-ancestors`** — anti-clickjacking; inverse of `frame-src`. Accepts only `'none'`/`'self'`/host/scheme (no nonce/hash/unsafe-inline). **Header-only** (ignored in `<meta>`). **Supersedes X-Frame-Options** — CSP2 verbatim: *"frame-ancestors obsoletes X-Frame-Options… frame-ancestors SHOULD be enforced and X-Frame-Options SHOULD be ignored."* Keep XFO only for pre-CSP browsers.
- **`upgrade-insecure-requests`** — valueless; **rewrites** http→https before network, does NOT block; fails if no HTTPS (no fallback); doesn't upgrade cross-origin top-level nav; not an HSTS replacement. `block-all-mixed-content` (blocked instead) deprecated.
- **Trusted Types** (`require-trusted-types-for 'script'` + `trusted-types`) — guards DOM injection sinks (innerHTML/eval), targets DOM-XSS that source allowlists can't see. The frontier: "can a string become code" vs "where can code load."

## Next

L5 — CSP1 vs CSP2 vs CSP3 (the explicit ask). Rewind: origin (prefixed headers → 1.0/2012), which directives arrived in which level, deprecations/removals. Now that the full catalogue is taught, the history slots each directive into its level.
