# Notes — The Shape of Code

Source of the course: `lesson-briefs-shape-of-code.md` at the repo root, a personal reference the learner wrote up from a real design conversation (July 2026). Named to match the `lesson-briefs*.md` gitignore pattern, so it stays out of the public repo like every other source brief.

## Course shape

Eight lessons in four arcs, then an interleaved quiz. Two references: a glossary and a printable design-note template with a shape-smell table.

- **Arc 1 — The distinction**: L1 two kinds of correct, L2 the three places shape shows up.
- **Arc 2 — Shaping data**: L3 make illegal states unrepresentable, L4 parse don't validate.
- **Arc 3 — Shaping signatures and enforcement**: L5 kill the flag that changes what's required, L6 invariants by convention vs by structure.
- **Arc 4 — Judgment**: L7 correctness and visibility are two axes, L8 the design note (synthesis).

## Teaching decisions

- **Dependency-ordered, strictly forward.** L3 (union over a data type) before L5 (split over a signature), because L5 is explicitly the same fix applied to a parameter list. L6 (structural enforcement) before L7 (visibility of that enforcement), because L7 has nothing to be a second axis *of* until L6 exists. L8 is the designated synthesis lesson, the only one allowed to tie the whole arc together.
- **Two named principles get their own lesson, three get glossary entries.** "Illegal states unrepresentable" (L3) and "parse, don't validate" (L4) are mechanically distinct and each earn a lesson. "Type-driven design", "correct by construction", and "deep modules" are vocabulary, so they live in the glossary and get cited where they apply. The source doc's term table is preserved in the glossary in full.
- **TypeScript for unions, Python told honestly.** L3 teaches discriminated unions in TS because that is where the compiler enforces exhaustiveness and field access. L4 covers the Python side and names the real limit: DRF's `.validated_data` is a plain dict, so the serializer parses and then throws the proof away. A frozen dataclass built from `validated_data` is what restores it. This is the "tool-specific truth over generic theory" rule in action.
- **The tenant-isolation example is taught as an invariant, not a state machine.** That distinction is the whole point of Example C in the source doc, and it is what makes L6 a different lesson from L3 rather than a repeat.
- **Visibility is a first-class lesson, not a footnote.** The source doc flags it as "a separate axis, easy to conflate with correctness." L7 gives it the full treatment, including the move of naming the split out loud to unstick a stalled design argument, and the ways to buy discoverability without giving up structural enforcement.

## Verified, not recalled

Every mechanism claim in the course was checked against a primary source before it was written:

- **Postgres 18** `ddl-schemas`: unqualified name resolution, `SET search_path TO`, and the page's own security caveat that adding a schema to `search_path` "effectively trusts all users having `CREATE` privilege on that schema."
- **Django 6.0** middleware: the `__call__(request)` contract, that it runs per request before the view, and top-down `MIDDLEWARE` ordering on the request phase.
- **Celery 5.6.3** tasks: `base=` on the task decorator, `task_cls` on the app, and the `before_start` hook.
- **TypeScript handbook** (narrowing): the `Shape`/`kind` example, the exact statement of why an optional-field encoding defeats the checker, and the definition of a discriminated union.
- **DRF** serializers: `.validated_data` is a dict of validated native types.
- **Alexis King**, "Parse, don't validate" (2019-11-05): `parseNonEmpty` vs `validateNonEmpty`, shotgun parsing, and the seven closing principles.
- **Yaron Minsky**, Jane Street blog "Effective ML revisited" (2011-03-09), which carries a "Make illegal states unrepresentable" section. The slogan traces to his Effective ML guest lectures at Harvard.

## Voice

Lesson prose follows `article-voice` (plain third-person lecture) over the `ai-tells` blocklist. Emdashes are used in headings only; body prose, callouts, captions, recall prompts, glossary cells, and quiz text avoid them per the repo carve-out. The marked **key line** callout may stay punchy.

## Public-repo scrub

The source conversation's identifying details are stripped. The document-validation and tenant-isolation examples are described generically ("a document-validation function", "a multi-tenant Postgres schema layout"). No org, repo, ticket, or person is named. Keep it that way.

## Next zone of proximal development

Durability, not new content. Re-run the L9 quiz cold after a gap. The real test is the next non-trivial ticket: write the design note from `reference/design-note.html` before typing, and see whether the last question can be answered.
