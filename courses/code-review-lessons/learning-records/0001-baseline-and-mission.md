# 0001 — Baseline and mission set

**Date:** 2026-07-18
**Status:** Active

## Context

First session. Workspace built from `lesson-briefs.md` (repo root), which `pr-to-lessons` generated from a real code review of a sales-quote PDF endpoint. The change shipped; tests were added in a later commit. This course is post-hoc learning, not a fix. (All org/repo/PR/reviewer identifiers scrubbed from course files for the public repo.)

## Mission established

Turn the code-review feedback into reflexes applied at self-review time on future PRs. See `MISSION.md`. Two catches are self-identified *recurring* habits, so they anchor the course:

- following conventions too closely (drives L1, and the "no existing test to copy" reasoning in L7)
- writing for imagined future requirements (drives L6)

## Baseline (from the briefs)

- **Programmer level:** strong. Fluent in Clean Code canon (already in global CLAUDE.md). Gap is *discipline under pull*, not knowledge.
- **The pull:** an old codebase's conventions (copy what's there, match `order_receipt`) and speculative generality (build for later).
- **Stack:** Django + BigCommerce. USD-only; BigCommerce exposes no display currency, which is what made the copied currency handling wrong in L1.

## Decisions

- **Theme-ordered, not dependency-ordered.** The seven principles are independent; no forward references. Recall widgets answerable from the current lesson alone. Interleaving deferred to the L8 quiz.
- **Open on the real mistake, skip the theory lecture.** The learner has SRP/naming cold; the value is the specific misfire and the tell that catches it.
- **Verify Django claims against the repo's own venv.** Done for L4 (`get_field().validators`).

## Taught this session

All seven lessons + interleaved quiz + glossary + pre-PR checklist, built in one pass (learner chose full build).

- **L1** Copy-paste only after checking fit — `order_receipt_context` reused wholesale incl. cache key; USD-only currency handling carried into the quote path.
- **L2** Put logic at the layer that owns it — `cart.sales_quote_context()` on the model while rendering lived at the view.
- **L3** Names & docstrings reveal intent, track scope — `required_file_types`; email-specific docstring after scope broadened.
- **L4** Minimal, explicit change; framework accessors first — whole-function rewrite; hand-built field→validator map vs `_meta.get_field()`; `SimpleNamespace` vs `dict`.
- **L5** Co-locate what's always called together — temporal coupling (outside-PR pattern).
- **L6** Write for the current design — YAGNI (self-identified recurring habit).
- **L7** Test new behaviour even when neighbours lack tests — no coverage for `sales_quote`; "no tests for `order_receipt` either" reasoning; added in `a later commit`.

## Not yet assessed

- Whether the learner applies the checklist unprompted on the *next* real PR (the true success metric — check on the next `pr-to-lessons` run or code review).
- Retention: re-run the L8 quiz cold in a later session (spacing).

## Next zone of proximal development

Durability, not new content. Space the quiz; on the next PR, run the checklist and see which of the seven habits actually fired. Feed any that recur back as a targeted drill.
