# Mission

**Be able to explain Content Security Policy cold, at interview depth — the browser-side enforcement model, the full directive map, the CSP1 → CSP2 → CSP3 evolution, and why most real-world policies fail to stop XSS.**

## Why this mission

The learner is preparing to discuss CSP at an **interview / deep-understanding** level — the same mould as the connection-pooling and Celery courses. The goal is not to ship a header on a specific site today; it is *durable conceptual mastery*: explain the mechanism, the history, and the sharp edges without notes, and survive the "why" follow-ups.

The learner explicitly asked for **the history of the changes** ("what is CSP1 vs CSP2 vs CSP3?") and **each of the directives**. So the arc treats the three levels as a first-class subject, not trivia — the evolution *is* the explanation for why modern CSP looks the way it does (nonces, `'strict-dynamic'`, the retreat from host allowlists).

## Grounding constraints

- **Spec-first.** Every claim is verified against the W3C specs (CSP 1.0 / Level 2 / Level 3), MDN, and Google's strict-CSP research — never parametric memory. The three W3C documents are the ground truth for the level-by-level deltas.
- **Browser behaviour, not folklore.** Teach what the browser actually does on a fetch (the governing-directive lookup, the `default-src` fallback chain, the source-list match), not hand-wavy "CSP whitelists domains."
- **Interview framing.** Every lesson carries the **key line** (the soundbite) and the **trap** (what separates a deep answer from a shallow one), plus answer-before-peeking recall.

## Starting level (from baseline questions)

**Comfortable, wants internals.** The learner has written non-trivial policies and knows `default-src`/`script-src` basics. So the course skips "what is a header" and starts at the *evaluation model* — precise enough to satisfy an internals-hungry learner — then builds to the level history and the strict-CSP endgame.

## What "success" looks like

The learner can, unprompted, walk an interviewer through:
1. How the browser evaluates a policy per fetch — governing directive, fallback chain, source-list match, allow/block. *(L1)*
2. The source-list grammar and its edge cases — keywords, schemes, hosts, wildcards, path matching, the redirect path-ignore rule, nonces, hashes. *(L2)*
3. The full directive map — fetch / document / navigation / reporting families and the fallback cascades. *(L3–L4)*
4. **CSP1 vs CSP2 vs CSP3** — origin, what each level added and why, what got deprecated/removed. *(L5)*
5. Why host-allowlist CSPs are bypassable (JSONP, open redirects, path relaxation), and the strict-CSP answer: nonces + `'strict-dynamic'` + hashes. *(L6–L7)*
6. Reporting and rollout — Report-Only, `report-uri` vs `report-to`, the violation report, report-only → enforce. *(L8)*

## Notes for the teacher

- The learner drives hard into mechanism and reasons about lesson dependency order unprompted — build a connected model, teach the evaluation algorithm before the directive catalogue before the history.
- Flag explicitly where the abstraction differs from the implementation (e.g. `upgrade-insecure-requests` and `block-all-mixed-content` live in *other* specs but ride the CSP header; `frame-ancestors` supersedes `X-Frame-Options`).
- Prioritise *storage strength* (recall, spacing, interleaving) over in-the-moment fluency.
