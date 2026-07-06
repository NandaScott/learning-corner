# 0002 — Source-list grammar (L2)

**Date:** 2026-07-06
**Status:** active

## Built

**L2 — The source-list grammar.** The five source-expression kinds (keyword / scheme / host / nonce / hash), matched with OR, and the matching edge cases that leak real policies.

## Facts verified against W3C CSP3 §2.3 + §6.7 this session

- `*.example.com` matches subdomains only — **not** the apex `example.com` (the `*.` prefix requires ≥1 extra label).
- Bare `*` matches network-scheme hosts but **excludes** `data:`/`blob:`/`filesystem:` — those need explicit scheme-sources.
- Secure-upgrade: `http://example.com:80` matches `https://example.com:443` too; scheme-less host uses page scheme with http→https / ws→wss upgrade. CSP3: `'self'` also matches https:/wss: variants even on http pages.
- Path matching: trailing slash ⇒ **prefix** match; no trailing slash ⇒ **exact**; query + fragment ignored.
- **Redirect rule:** after a redirect, path component is not enforced (match uses request URL not current URL — avoids leaking redirect targets / probing path allowlists). §6.7.2.
- Any nonce-source or hash-source in a directive makes `'unsafe-inline'` **ignored** (CSP2+ graceful-degradation ramp).
- `'none'` = empty list, must be the only token.
- Nonce: ≥128-bit random, fresh per response. Hash: digest of exact inline bytes; CSP3 extends to external scripts via `integrity`.

## Next

L3 — fetch directives + the full fallback cascade (`script-src-elem`/`-attr`, `style-src-*`, `default-src` → `child-src` → `frame-src`/`worker-src`).
