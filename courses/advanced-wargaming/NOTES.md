# Notes — Advanced Wargaming Theory course

Working notes + the planned arc. Topic-specific; cross-topic preferences live in the repo `CLAUDE.md`.

## Relationship to the fundamentals course

This is the **sequel** to `courses/wargaming/` (Wargaming Fundamentals — the five principles, complete). This course teaches the second-tier theory built on those five. The five principles are a **completed prerequisite**, so referencing them by name and cross-linking to their lessons is fair game and encouraged — it is *not* a forward reference. The forward-reference rule applies only within this course's own arc.

Source seed: `~/Downloads/advanced-wargaming-theory-topics.md` (8 topics + a suggested learning order). Treated the same way the fundamentals course treated the learner's `five-principles` outline: a structure to expand, verify, and harden into retrieval-tested lessons.

## Learner shape (unchanged from fundamentals)

- Drives hard into mechanism; reasons about dependency order unprompted; asks pointed 40K-specific edge cases; iterates on presentation. Comfortable with code; gaps are conceptual/internals.
- Completed the five principles → assume them cold, do not re-derive, do not explain what a CP/activation is.

## Source discipline

- **Sun Tzu = Giles translation, verified verbatim** (Project Gutenberg #132 / MIT Internet Classics Archive).
- **40K = current 11th-edition core rules** (official free GW download / Wahapedia `wh40k11ed` mirror). Supply board examples rather than lean on the learner's own games.

## Voice

Plain, no AI tone — canonical rule + tell-list lives in the repo `CLAUDE.md` ("Plain voice — no AI tone"). Applies to every lesson.

## Lesson spine (same as prior courses)

Each lesson: concept plainly → numbered step overview diagram (the map) → one short `h3` per step → synthesis ("why it matters") → **key line** (`.callout.interview`) + **the trap** (`.callout.gotcha`) + **recall** widget. Each lesson also carries an **Art of War** callout (verified Giles passage, plain `.callout` tagged "The Art of War") and a **Heuristic** (`.callout` tagged "Heuristic" — the blunt one-liner). Cite a single best primary source per lesson.

## Planned arc (order per the reference doc's suggested learning order)

**Part 1 — Controlling the game**
- L1 — **Tempo and initiative.** Initiative = who sets the problem; tempo = holding it over time. Action economy (an activation is a resource; removal-before-activation is a double swing); forcing reactions; alpha-strike vs bait-and-punish; being ahead means pressing, not coasting. Deepens all five at once. *(built)*

**Part 2 — Choosing and overloading targets** (they pair)
- L2 — **Target priority.** The one piece whose removal most collapses their plan (buff/linchpin, not the scariest gun). Dangerous vs decisive. Ties P1 (what removal moves the score) to P4 (concentrate on that one thing). *(planned)*
- L3 — **Shaping the battle: deception & threat overload.** Baiting/feints; sacrificial chaff that dies profitably; threat overload = more problems than they have answers for. Offensive complement to capability-mapping. Sun Tzu "all warfare is deception" (Ch I). *(planned)*

**Part 3 — Structure and setup**
- L4 — **The hammer and anvil.** Anvil fixes (objective pressure / space denial vs a shooting army), hammer strikes; hammer is a role not a datasheet; a hammer needs an anvil. *zheng* (direct/fix) + *qi* (indirect/strike), Sun Tzu Ch V. *(planned)*
- L5 — **Deployment and the first-turn metagame.** Half the game decided pre-roll; read mission + terrain; take/give first turn; deployment as threat-range management; screening/zoning; reserves as pre-committed optionality (P5). "Win first, then go to battle." *(planned)*

**Part 4 — The list, the dice, the millimetres**
- L6 — **List construction as applied theory.** The army as pre-game decisions; coherent hammer + enough anvil; full threat spectrum; internal balance vs linchpin-fold; reading a list as a thesis about how to win. *(planned)*
- L7 — **Risk and probability as a felt skill.** Internalised variance/EV/robustness; robust-to-bad-luck not reliant-on-good; commit with margin (P4); weight worst case at stakes (P5); spend guaranteed-effect tools on low-volume high-stakes rolls. *(planned — best woven through)*
- L8 — **Phase-by-phase mastery: the craft layer.** Movement as the most important phase; coherency/spacing; charge/pile-in/consolidation geometry; model placement to control what's in range; screening/deep-strike-denial distances. *(planned — best woven through)*

**Part 5 — Review**
- L9 — **Interleaved review quiz** (reuse `assets/quiz.js`). Across all lessons; near-miss distractors; run cold then again days later. *(planned)*

**STATUS: COURSE COMPLETE — L1–L8 + interleaved quiz (L9) + scaffold + glossary + hub card. All built in the initial session on the learner's "continue." All Sun Tzu quotes verified verbatim (Giles); 40K grounded on 11th ed. Now in durability/spacing phase — don't re-teach the arc; drill, space, and refine on request.**

Built statuses updated: L2 target priority, L3 deception & threat overload, L4 hammer and anvil, L5 deployment & first-turn, L6 list construction, L7 risk & probability, L8 phase-craft, L9 quiz — all *(built)*.

## Decisions

- Reuse repo-root `assets/course.css` + `quiz.js`/`quiz.css` as-is. Same callout conventions as fundamentals (key line = `.callout.interview`; trap = `.callout.gotcha`; heuristic = own `.callout` tagged "Heuristic"; Art of War = plain `.callout`).
- Overview shows the full planned map so the learner sees where it's going; unbuilt lessons render as muted, non-link cards (no broken links) until built.
- Separate glossary from the fundamentals course — this one holds the *advanced* vocabulary (initiative, tempo, action economy, hammer/anvil, threat overload, etc.), cross-referencing the fundamentals glossary for the five principles rather than duplicating.

## Precision watch-list (verify, don't assume)

- **40K is I-go-you-go at the turn level**, NOT alternating-activation. The reference doc's "alternating-turn game / activations" language is generic. The one place 40K genuinely alternates activations is **inside the Fight phase** (players alternate selecting eligible units, Fights First first). Verified against `wh40k11ed`. So "kill it before it acts" is *most literal in the Fight phase*; in other phases it's "kill it on your turn → it produces nothing on their following turn (a full round of output denied)."
- **Objective control** — controlled by higher total OC of models in range, re-checked at end of each phase and turn; once *secured*, stays controlled until the opponent's level exceeds it. Keep at the altitude the fundamentals glossary already set; don't quote hard VP numbers.
- **"Double swing" / stealing an activation** is a consequence of action economy, not a special rule — state it as: you gained your output and cancelled theirs.
- Sun Tzu attributions (verified verbatim, Giles): "clever combatant imposes his will…" / "Appear at points which the enemy must hasten to defend" / "Whoever is first in the field…fresh…second…exhausted" = **Ch VI, Weak Points and Strong**. "Attack him where he is unprepared, appear where you are not expected" = **Ch I, Laying Plans** (reserved for the deception lesson). "not more than two methods of attack — the direct and the indirect…endless series of maneuvers" = **Ch V, Energy** (reserved for the hammer-and-anvil lesson).
