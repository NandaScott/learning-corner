# Mission

**Turn the review feedback from the PR into reflexes — so the same catches don't come back on the next PR.**

## Why this mission

The code review of a sales-quote PDF endpoint drew a cluster of comments, including one from an automated check. The code shipped (tests added in a later commit), so this is not about fixing that branch. It is about internalising the *judgment* behind each comment as a durable habit, applied at self-review time on future diffs.

Several of the catches are self-identified recurring habits, not one-off slips:

- "tripping up too much trying to follow conventions too closely"
- "stuck constantly trying to prepare and write for future code when I should be writing for the current design"

Those are the two the course leans hardest on, because a habit that recurs is worth spaced retrieval practice, not a single reading.

## Grounding constraints

- **Real stack:** a Django + BigCommerce codebase. Every example is an actual mistake from the review, not a textbook toy. Django-specific claims (e.g. `Model._meta.get_field().validators`) are verified against the Django 6.0 source in the repo's own venv, not recalled.
- **Audience level:** strong programmer, fluent in Clean Code (Bob Martin canon already lives in the global CLAUDE.md). So the lessons do **not** re-teach SRP or naming from scratch — they teach the *judgment call* at the moment of the mistake, and the tell that would have caught it.
- **The gap is discipline, not knowledge.** The learner knows the principles. The failure mode is applying them under the pull of an existing codebase's conventions and an imagined future. The lessons target that pull.

## What "success" looks like

At self-review time on a new PR, unprompted:

1. Annotate every copied block with *why it belongs here*, and cut lines that only made sense at the origin. *(L1)*
2. Ask "which layer owns this?" before choosing the file for a new method. *(L2)*
3. Re-read a changed function's name and docstring as the last edit before commit. *(L3)*
4. Reach for the framework's own accessor before hand-rolling a lookup; justify any rewrite bigger than the change needs. *(L4)*
5. Spot temporal coupling by looking at call sites — merge what always runs together. *(L5)*
6. Cut any hook/param/layer added "for later" with no current caller. *(L6)*
7. Write action-level tests for new behaviour regardless of whether adjacent legacy code has any. *(L7)*

## Notes for the teacher

- Each lesson opens on the **real PR mistake**, names the principle, shows the correction, and ends with the **applied habit** (the check to run at review-of-my-own-diff time). Keep the mistake concrete — it's the retrieval hook.
- Prioritise *storage strength*: these are habits, so spacing and interleaving matter more than a clean first read. The L8 quiz interleaves all seven and pits each right answer against its near-miss.
- Do not re-derive Clean Code theory. The value is the specific judgment under the specific pull, verified against the real code.
