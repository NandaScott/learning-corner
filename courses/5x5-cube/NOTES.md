# Working notes — 5x5 cube course

## Learner baseline
- Solves 3x3 comfortably (self-reported, LR-0001). The 3x3 stage of reduction needs zero teaching.
- Owns a 5x5; every lesson should end with physical reps on the real cube.
- Mission is reliability, not speed — prefer one robust technique per stage over case lists.

## Planned arc (adjust as records accumulate)
1. **L1 — Reduction: how a 5x5 becomes a 3x3.** Piece taxonomy, fixed centers, wide-move notation, the three-stage map. *(built)*
2. **L2 — Centers I: the first two.** White then yellow, bar-by-bar; lift–park–restore (`Rw U2 Rw'`). *(built)*
3. **L3 — Centers II: the last four.** Hold done pair on L/R; adjacency rule for centers 3&4 (verified CubeSkills p.2); same lift–park–restore under shrinking free space; last two = no free scratch face. Uses `L2C` stickering. *(built)*
4. **L4 — Edge pairing.** Tredges, the slice–flip–slice loop, first ~8 edges.
5. **L5 — The last edges + parity.** Flipping alg, the OLL-parity case and its algorithm.
6. **L6 — Synthesis: the full solve.** End-to-end walkthrough, why the 3x3 stage is clean on odd cubes.
7. Quiz after the arc is taught.

## Visuals (agreed 2026-07-09)
- Two tiers: static SVG piece/face diagrams (`assets/cube-diagram.js`) + animated cube players (`assets/twisty.js`, vendored cubing.js `<twisty-player>`, plays standard notation incl. `3Rw'`).
- Every lesson teaching *moves or algorithms* embeds a player; static anatomy uses the SVG helper.
- **Gotchas (verified by bisect):** pages embedding `twisty-player` need `<!doctype html>` (quirks mode breaks init), and the `twisty-player` element must never be styled from page CSS — any host rule (even width/height) blanks or misplaces its canvas. Let it render at default size inside a `.figure`.
- **Correction (2026-07-09, later same day):** the earlier "stickering attrs blank the cube" finding was wrong — an artifact of a flaky debug-Firefox instance that rendered nothing at all. `experimental-stickering` works fine in real browsers (learner verified `L2C` themselves; definition verified in cubing.js source: non-centers ignored, L/R/B/D centers dimmed, U/F centers regular). The mask-orbits and 2D findings were confounded the same way — treat as unknown, re-test in a healthy instance before relying on them.
- **Center-stage demo convention (updated):** first-two-centers demos use `experimental-stickering="opposite-centers"` — only U/D center pieces visible, no dim tier (learner found it; verified in cubing.js source: `not(centers ∩ movedBy(U,D)) → Ignored`; listed under the 4x4 Reduction group but size-generic). `L2C` (U+F centers bright, other centers dim) is the natural fit for L3's last-two-centers endgame, where the two open faces are adjacent. Both hide all edges — find or build an edge-focused view for L4–L5 (candidate: `experimental-stickering-mask-orbits` — needs a healthy-instance retest).
- L3 verified 2026-07-09: static content clean; twisty player control panel rendered in first debug instance, cube canvas blank (WebGL flakiness). Differential test — known-good L2 player failed identically in the same restarted instance (`customElements` defined, no shadow/canvas), confirming instance degradation not a page bug. Opened in real browser for eyeball.
- Learner tried the SVG storyboard and the L2C-dimmed 3D player; storyboard **not helpful**, L2C view is what clicked (2026-07-09). Lead with the L2C player for maneuvers; keep cube-diagram SVGs for static anatomy only (piece taxonomy, bar decomposition).

## Conventions for this course
- Physical skill course: recall widgets stay, but the real feedback loop is the cube itself — each lesson closes with a hands-on drill.
- Algorithms always in J Perm notation (Rw / 3Rw), cited to jperm.net/5x5. Verify any alg character-for-character before teaching.
- Glossary candidate terms so far: tredge, midge, wing, x-center, +-center, fixed center, reduction, wide move. Create reference/glossary.html around L2–L3.
