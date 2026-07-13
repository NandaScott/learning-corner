# Learning Corner — repo guide

This repo is a **multi-topic learning hub**: a central home for self-contained courses, each built by the `teach` skill, browsable together via the root `index.html` and published to GitHub Pages.

## How `/teach` works in this repo

The generic `teach` skill treats "the current directory" as a single workspace. **In this repo, override that:** the repo root is the *hub*, not a workspace. Each topic is its own workspace under `courses/<slug>/`.

When teaching here:

- **Workspace = `courses/<slug>/`.** Create one folder per topic (e.g. `courses/connection-pooling/`). All of the topic's `MISSION.md`, `NOTES.md`, `RESOURCES.md`, `lessons/`, `reference/`, and `learning-records/` live inside that folder — never at the repo root.
- **Assets are shared, at the repo root `assets/`.** `course.css` and the `quiz.js` + `quiz.css` engine are reused across every course. `twisty.js` (vendored cubing.js `<twisty-player>`, MPL-2.0) animates twisty-puzzle algorithms; `cube-diagram.js` renders declarative SVG cube-face grids. Reuse them; do not re-author. Two `<twisty-player>` rules: the embedding page must start with `<!doctype html>`, and never style the `twisty-player` element from page CSS (any host rule breaks its canvas — use its default size inside a `.figure`). Its `experimental-stickering` attribute works (e.g. `L2C` for centers-only demos). When verifying via the firefox-devtools MCP, a blank cube is usually per-launch WebGL flakiness of the debug instance — restart Firefox and re-test before concluding anything about the page or the player's attributes. From a lesson or reference page (`courses/<slug>/lessons/…`), link assets with `../../../assets/…`. From a course `overview.html` (`courses/<slug>/…`), use `../../assets/…`.
- **Register the course in the hub.** After creating or materially updating a course, add or refresh its card in the root `index.html` so it shows up in the hub.
- **Each course gets an `overview.html`** (the course front page: lessons grouped by arc + quiz CTA), breadcrumbing up to `../../index.html`.
- **Keep links relative and depth-correct** — they must resolve both on `file://` and on GitHub Pages (`https://<user>.github.io/learning-corner/`).

## General teaching preferences (apply to every course)

These are cross-topic preferences for this learner. Topic-specific notes stay in each `courses/<slug>/NOTES.md`.

**Lesson flow** (the learner asked for this shape):
1. Introduce the concept plainly — what it is.
2. The steps — a numbered overview diagram as the map, then one short `h3` per step (a few sentences each) with an ASCII diagram where it helps. Explain each step, don't just list.
3. Synthesis — pull the consequences / "why it matters" together at the end.
Then close with: a crisp **key line** (the soundbite that nails the point), the **common trap** (what separates a deep answer from a shallow one), and a **recall** widget (answer-before-peeking retrieval practice).

**Quiz convention:** 4 options per question; `option[0]` = correct, `option[1]` = a deliberate **near-miss** (right idea, subtly wrong) to test trap-level distinctions; the remaining two are plausible distractors. Reuse `assets/quiz.js` — the engine shuffles display order so position never leaks the answer. Never re-author the quiz widget.

**Sourcing discipline:** Cite everything; never teach from parametric memory. Each lesson recommends a single best primary source. Verify mechanisms against real docs (e.g. via context7) before teaching them.

**Tool-specific truth over generic theory:** teach the actual tool's behaviour (the learner's real stack), not the textbook abstraction. Flag explicitly when a general concept differs from the specific implementation.

**Accuracy over consistency:** if a past explanation was wrong, correct it openly and fix the lesson — don't paper over it for narrative smoothness.

**Storage strength > fluency:** favour retrieval practice, spacing across sessions, and interleaving once there's enough material. Fluency can fake mastery; long-term recall is the goal.

**Build strictly forward — no forward references:** each lesson may build on any *earlier* lesson, but must stand on its own plus what came before. Never rely on, explain, or quiz content from lessons not yet taught. In particular, a **recall widget question must be answerable from the current lesson and prior lessons alone** — never "how does this relate to [later principle]." A single next-lesson teaser in the nav / ask-teacher block is fine (it points forward without depending on that content); the `overview.html` map showing all lessons is fine (it's a table of contents, not a dependency). The one exception is the dedicated synthesis lesson, whose job *is* to tie the whole arc together. Knowledge accumulates in one direction.

**Hub-neutral framing:** Courses live in a shared, published hub — not a private 1:1 tutorial. Teach the specific stack deeply (Django + Postgres content is right), but don't frame pages with single-learner possessives ("Your stack", "your teacher", "your real deploy") or 1:1 tutoring voice. Use "the stack" and neutral second-person instruction ("you'll", "run it cold") — that pedagogical second person is fine; the possessive *ownership* framing is what to avoid. (This governs *voice*; "Tool-specific truth over generic theory" above governs *content depth* — they don't conflict.)

**Plain voice — no AI tone:** Lesson prose follows the `article-voice` skill (plain third-person lecture voice plus the named-tell catalog and de-slop proofread pass), which sits on top of the `ai-tells` shared blocklist. Write lesson prose plain and calm from the first draft, and run `article-voice` as a proofread pass over any lesson that reads machine-written. The skill's catalog is canonical for the tells; this file no longer restates them, so it cannot drift.

Repo-specific carve-out for the proofread pass: this is a *register* rule, not a depth cut. Keep the substance, diagrams, and the key-line / trap / recall callouts. The deliberate **key line** soundbite is a marked callout and may stay punchy, so `article-voice` leaves it alone rather than flagging it as an aphoristic closer.

## How this learner learns (cross-topic)

- Drives hard into mechanism — feed the "why" deep-dives, don't hand-wave.
- Reasons about lesson *dependency order* unprompted — build connected models, not fact lists.
- Asks pointed edge-case questions and insists on the *specific tool's* answer — give precise, verified, implementation-level detail.
- Iterates actively on presentation (step depth, quiz design, nav links). Treats lessons as living artifacts — expect and invite refinement.
- Comfortable with code (TDD, clean-code discipline); the gaps tend to be conceptual/internals, not programming.

## Conventions

- Lessons + reference docs are written in clean prose (they're revisited), even when chat is terse.
- Reference docs should print well (Tufte-ish). The glossary, once created, is canonical vocabulary — adhere to it in every lesson of that course.
