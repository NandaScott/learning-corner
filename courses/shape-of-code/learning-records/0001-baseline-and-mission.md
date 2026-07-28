# 0001 — Baseline and mission set

**Date:** 2026-07-27
**Status:** Active

## Context

First session. Workspace built from `lesson-briefs-shape-of-code.md` at the repo root (gitignored via the `lesson-briefs*.md` pattern), a personal reference the learner wrote up after a real design conversation in July 2026. The document already contained a distilled model (two kinds of correct, three places shape shows up, a term table, three worked examples, a design-note template, four exercises, a reading path). The teaching job was therefore not discovery but sequencing: turn a flat reference into a dependency-ordered course with retrieval practice, and verify every mechanism claim it implied.

## Mission established

Design the right shape before writing code, and be able to name and defend it in a design discussion. See `MISSION.md`.

Two concrete cases from the originating conversation anchor the course:

- A document-validation function whose third parameter is required in one branch and irrelevant in the other. Drives L5.
- Tenant isolation enforced by asking every developer to reset the Postgres `search_path` before every query. Drives L6, and the visibility disagreement it produced drives L7.

## Baseline

- **Programmer level:** strong. Clean Code canon already fluent (it lives in the global instructions). Gap is the axis Clean Code mostly omits: not whether code reads well, but what code makes writable.
- **The learner had already done the hard synthesis.** The source document's "one question" and its separation of visibility from correctness are both non-obvious and both correct. The course does not need to sell the idea, only to make it retrievable under time pressure and arguable in front of a colleague.
- **Stack:** Django + DRF + Postgres + Celery, TypeScript on the client.

## Decisions

- **Dependency-ordered, strictly forward.** L3 (union over a data type) precedes L5 (split over a parameter list) because L5 is the same fix on a different surface. L6 (structural enforcement) precedes L7 (visibility of enforcement) because L7 needs something to be the second axis of. L8 is the designated synthesis lesson.
- **Two principles get lessons, three get glossary entries.** "Illegal states unrepresentable" and "parse, don't validate" are mechanically distinct, so each earns a lesson. "Type-driven design", "correct by construction", and "deep modules" are vocabulary for a design conversation, so they live in the glossary and are cited where they apply. The source document's full term table is preserved there.
- **Unions in TypeScript, Python taught honestly.** L3 uses TS because that is where the compiler enforces narrowing and exhaustiveness. L4 states the real limit on the Python side: DRF parses and then hands back a plain dict, so the proof is discarded at the boundary. A frozen dataclass constructed from `validated_data` is what carries it forward. Flagging that gap explicitly matters more than a tidy cross-language story.
- **Verify every mechanism, cite every claim.** Postgres 18 `search_path` (including the page's own `CREATE`-privilege security caveat), Django 6.0 middleware contract and ordering, Celery 5.6.3 `base=` / `task_cls` / `before_start`, the TypeScript handbook's `Shape` example verbatim, DRF `.validated_data`. All fetched before the lessons that use them were written. Logged in `RESOURCES.md`.

## Taught this session

Eight lessons, an interleaved quiz, a glossary, and a printable design-note template, built in one pass.

- **L1** Two kinds of correct. Functional vs conceptual; the patch test as the tell; the one question. Grounded in Ousterhout's three symptoms of complexity.
- **L2** The three places shape shows up. Entities, boundaries and authority, invariants. Invariants ranked highest-stakes because they are rules, not workflows.
- **L3** Make illegal states unrepresentable. Order-status discriminated union; narrowing gives field access only inside the right branch; exhaustiveness; transition knowledge concentrated in one function rather than smeared.
- **L4** Parse, don't validate. Validation discards the proof, parsing returns a type that carries it. The DRF dict gap named explicitly.
- **L5** Kill the flag that changes what's required. The document-validation case. Shape is not DRY: share the mechanism, delete the branch that let a caller supply the wrong combination.
- **L6** Invariants by convention or by structure. Tenant isolation. Name the invariant, enumerate the entry points, enforce at each, audit for bypasses. Entry points are finite and enumerable; future call sites are not.
- **L7** Correctness and visibility are two axes. Implicit enforcement is invisible at the call site, which is a discoverability cost, not a correctness one. Naming the split out loud as the move that unsticks a stalled argument.
- **L8** The design note. The template, the four exercises, and the last question as the gate.

## Not yet assessed

- Whether the design note gets written unprompted before the next non-trivial ticket. That is the real success metric, not the quiz.
- Retention: re-run the L9 quiz cold after a gap of days, not hours.
- Whether the correctness/visibility split actually gets used in a live design disagreement. That one can only be checked in the wild.

## Next zone of proximal development

Durability, not new content. Space the quiz. Then apply: run the design-note template on a real ticket, and separately run exercise 1 (retro-fit the note to something already shipped) since the gap between what the note says and what the shipped code does is the most direct measurement of conceptual mismatch available.

If a fifth arc is ever wanted, the honest gap is the counter-argument: when a discriminated union or a parse boundary costs more than it buys. The course currently teaches the principle well and its limits only in L7. Reading the objections in the community threads listed in `RESOURCES.md` is the way in.
