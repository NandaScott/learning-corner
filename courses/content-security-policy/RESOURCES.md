# Resources — Content Security Policy

Trusted sources for grounding lessons. Lessons cite these; never teach from parametric memory.

## Primary (highest-trust — the specs)

- **CSP Level 3 — W3C Working Draft** — <https://www.w3.org/TR/CSP3/>
  The current spec, rewritten on top of the Fetch standard. Ground truth for the evaluation algorithm, the full directive list, `'strict-dynamic'`, `'unsafe-hashes'`, `report-to`, `worker-src`/`manifest-src`, the `*-src-elem`/`*-src-attr` split, and the "Changes from Level 2" changelog.
- **CSP Level 2 — W3C Recommendation** — <https://www.w3.org/TR/CSP2/>
  The level that added nonces, hashes, `child-src`, `frame-ancestors`, `form-action`, `base-uri`, `plugin-types`. Has its own "Changes from Level 1" section — the CSP1→CSP2 delta.
- **CSP 1.0 — W3C Candidate Recommendation (2012)** — <https://www.w3.org/TR/2012/CR-CSP-20121115/>
  The original standardized level. The baseline directive set (`default-src`, `script-src`, `style-src`, `img-src`, `connect-src`, `font-src`, `media-src`, `object-src`, `frame-src`, `sandbox`, `report-uri`) and the `'unsafe-inline'`/`'unsafe-eval'` keywords. No nonces/hashes.

## Reference (directive catalogue)

- **MDN — Content-Security-Policy header** — <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy>
  The practical per-directive reference: categories (fetch / document / navigation / reporting), fallback behaviour, deprecation flags (`report-uri`, `block-all-mixed-content`), and browser-support notes.
- **MDN — CSP guide** — <https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP>
  Conceptual overview, nonce/hash usage, Report-Only, common recipes.

## Strict CSP / why allowlists fail (the XSS endgame)

- **web.dev — Mitigate XSS with a strict CSP** — <https://web.dev/articles/strict-csp>
  Google's guidance: why host allowlists are bypassable, the recommended nonce-based and hash-based policies, `'strict-dynamic'`, `object-src 'none'`, `base-uri 'none'`.
- **"CSP Is Dead, Long Live CSP" — Weichselbaum et al. (Google, CCS 2016)** — <https://research.google/pubs/pub45542/>
  The research paper behind the strict-CSP push. Measured that the vast majority of real allowlist policies were trivially bypassable (JSONP endpoints, open redirects). The *why* under L6.
- **csp-evaluator.withgoogle.com** — <https://csp-evaluator.withgoogle.com/>
  Tool that scores a policy and names its bypasses. Good for pressure-testing a policy you wrote.

## History

- **Wikipedia — Content Security Policy** — <https://en.wikipedia.org/wiki/Content_Security_Policy>
  Origin timeline: proposed as "Content Restrictions" (Hansen, 2004), experimental prefixed headers `X-Content-Security-Policy` (Firefox) and `X-WebKit-CSP` (WebKit/Chrome, 2011), CSP 1.0 → W3C Candidate Recommendation 2012.

## Communities (for pressure-testing explanations — wisdom)

- **r/netsec**, **r/websecurity** — CSP bypass write-ups and policy critiques.
- **Stack Overflow `[content-security-policy]` tag** — canonical Q&A for the "why is my inline script blocked" / nonce / `strict-dynamic` war stories.
- **PortSwigger Web Security Academy** — <https://portswigger.net/web-security> — labs that exercise CSP bypasses hands-on (the wisdom layer: break one, then you understand it).
