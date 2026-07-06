# 0006 — Why host allowlists fail (L6)

**Date:** 2026-07-06
**Status:** active

## Built

**L6 — Why host allowlists fail.** The bug is in the *model* (origin-based trust), not the config. Sets up strict CSP.

## Stats verified — Weichselbaum et al., "CSP Is Dead, Long Live CSP!" (ACM CCS 2016)

- Dataset: ~100B pages, 1B+ hostnames, **1,680,867 hosts**, **26,011 unique policies**.
- **94.72%** of distinct policies had a bypass.
- **75.81%** used exploitable script allowlists.
- **94.68%** of policies attempting to limit script execution were ineffective.
- **99.34%** of hosts with CSP got no XSS benefit.
- **14 of 15** most-allowlisted script domains hosted unsafe endpoints.
- Paper's proposed fix: nonce-based CSP + `'strict-dynamic'`, no domain allowlists.

## Bypass taxonomy (grounded)

1. **JSONP** — `?callback=ATTACKER_JS` reflected as executable script from the trusted origin. `<script src>` to it passes CSP.
2. **Open redirect** — defeats path-restricted entries because **CSP drops the path after a redirect** (reuses L2's matching edge — same fact, offensive use).
3. **Shared CDN / framework gadget** — PortSwigger verbatim: `ajax.googleapis.com` "should not be trusted, because third parties can get content onto their domains." Allowlisted AngularJS → template-injection gadget.
4. **Rot** — allowlist is a standing unverified claim about every listed origin's current behavior.

## Teaching connective tissue

- L2 redirect-path-drop = L6 open-redirect exploit (same fact). Called out as the deep-understanding tell.
- Why nonces win: trust a specific element carrying *your* fresh nonce, not a coercible origin.

## Next

L7 — strict CSP: nonces + `'strict-dynamic'` + hashes; how strict-dynamic propagates trust and ignores host/scheme entries; `object-src 'none'` + `base-uri 'none'` close the flanks. The payoff lesson.
