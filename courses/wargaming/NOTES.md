# Notes — Wargaming Fundamentals course

Working notes + the planned arc. Topic-specific; cross-topic preferences live in the repo `CLAUDE.md`.

## Learner shape (this course)

- Mission: **theory-first mastery, anchored to real 40K decisions.** Own the transferable strategic model; keep every principle nailed to a concrete board state.
- Baseline: **wrote the outline (`~/Downloads/five-principles-of-wargaming.md`); knows 40K rules; plays rarely.** Don't re-derive from scratch, don't explain what a CP is. Sharpen, verify, harden the chain, add retrieval scaffolding.
- Source discipline: **Sun Tzu = Giles translation, verified verbatim** (Project Gutenberg #132). **40K = current 11th-edition core rules** (official free GW download / Wahapedia `wh40k11ed` mirror). Supply board examples rather than lean on the learner's own games.

## Voice

Plain, no AI tone — the canonical rule + tell-list now lives in the repo `CLAUDE.md` ("Plain voice — no AI tone"), applying to every course. Originated from the learner flagging AI tone in this course's L1 (2026-07-06).

## Lesson spine (same as prior courses, learner liked it)

Each lesson: concept plainly → numbered step overview diagram (the map) → one short `h3` per step → synthesis ("why it matters") → **key line** + **the trap** + **recall** widget. Each principle-lesson also carries an **Art of War** callout (verified Giles passage) and a **Heuristic** (the blunt one-liner from the outline). Cite a single best primary source per lesson.

## Planned arc

**Part 1 — The axiom**
- L1 — **Value flows from the win condition** (Principle 1). Mission score, not body count; deny = score; no coasting. *(built)*

**Part 2 — The four operating principles**
- L2 — **The economy of exchanges** (Principle 2). Every action is a purchase; exchange rate in score-difference; opportunity cost; overpaying-while-winning. *(built)*
- L3 — **Threat range & the control of space** (Principle 3). Threat range = move + reach; control without firing; overlap = contested; terrain breaks symmetry; read one turn forward. *(built)*
- L4 — **Concentration of force** (Principle 4). Nonlinear output / the removal cliff; local superiority; the price is going thin elsewhere; the margin/target-band. *(built)*
- L5 — **Commitment under uncertainty** (Principle 5, the capstone). Information arrives through the turn; defer irreversible commits; superposition of threats; variance appetite flips with the scoreboard; weight by reversibility. *(built)*

**Part 3 — Putting it together**
- L6 — **The five-step chain.** Why the order is load-bearing; drop-to-the-top-and-walk-down; specifics are regenerable, not memorised. *(built — synthesis lesson, forward-ref exempt)*
- L7 — **The two cross-cutting skills.** Model the opponent by capability not psychology; distrust the plan you can most easily justify. *(built)*

**Part 4 — Review**
- L8 — **Interleaved review quiz** (reuse `assets/quiz.js`). 20 Qs across all 7 lessons, near-miss distractors, run cold then again days later. *(built)*

**STATUS: COURSE COMPLETE — L1–L7 + quiz (L8) + scaffold + glossary. All Sun Tzu quotes verified verbatim (Giles); 40K grounded on 11th ed. Now in durability/spacing phase — don't re-teach the arc; drill, space, and refine on request.**

## Decisions

- Reuse repo-root `assets/course.css` + `quiz.js`/`quiz.css` as-is; no per-course re-theme (hub stays consistent). The brick-red accent is fine — reads classical, not Postgres-specific.
- Art-of-War parallels use a plain `.callout` with tag "The Art of War". Heuristics use `.callout.interview` alongside the key line, OR their own tagged callout — keep consistent once chosen. **Decision: key line uses `.callout.interview`; the blunt heuristic gets its own `.callout` tagged "Heuristic"; the trap uses `.callout.gotcha`.**
- Build one lesson per session; the overview shows the full map so the learner sees where it's going.
- Glossary is canonical once created — adhere to its wording in every lesson.

## Precision watch-list (things easy to get wrong — always verify)

- **"Deny a point = score a point" is exactly true only because the game is decided by the *difference* of the two VP totals.** State it as a consequence of that, not as a vibe.
- **Killing is never inherently worth VP.** It scores only via specific secondary missions or by protecting/denying primary. Don't imply kills are worthless — imply they're instrumental.
- **11th edition changed the scoring model — verify against `wh40k11ed`, not memory or 10th ed.** Objective *markers* are gone; you now control **terrain objectives** by having the higher total **Objective Control (OC)** of models in range, recomputed at the end of each phase and turn. The **primary mission is set by the two players' force dispositions**. VP amounts/timing are delegated to the mission — **do not quote hard VP caps** (the old 50/40 was 10th-ed Chapter Approved); verify against the live 11th-ed mission rules before stating numbers.
- **"A unit controls its whole threat range whether or not it fires"** — the mechanism is the *opponent's forced respect*, not any rule that reserves the space. Say it as a consequence of rational opposition.
- **Concentration's nonlinearity** comes from a unit doing ~100% of its job until it dies, then 0 — the *removal cliff*. This is the load-bearing "why", not just "focus fire good".
- Sun Tzu chapter attributions: "subdue without fighting" / "supreme excellence…without fighting" = Ch III (Attack by Stratagem). "Victorious strategist seeks battle only after victory won" = Ch IV (Tactical Dispositions). Verify each quote's wording verbatim in Giles before pasting.
