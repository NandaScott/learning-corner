# Mission

**Design the right shape before writing code, and be able to name and defend it in a design discussion.**

## Why this mission

A real design conversation exposed a gap that functional correctness hides. Two concrete cases drove it:

- A document-validation function taking `(type, htmlPath, txtPath?)`, where `txtPath` is required in one branch and irrelevant in the other. Nothing stops a caller supplying the wrong combination.
- Tenant isolation enforced by convention: every function that runs a query must remember to reset the Postgres `search_path` first. The rule lived in developers' heads, not in the structure.

Both shipped working code. Both were structurally capable of the wrong thing. The gap is not knowledge of clean code; it is the pre-keyboard judgment that asks *what would make the wrong thing impossible here* before the first line gets typed, plus the vocabulary to say it out loud when someone disagrees.

## Grounding constraints

- **Real stack:** Django + DRF + Postgres + Celery on the server side, TypeScript on the client. Discriminated unions are taught in TS because that is where the type system actually enforces them; the Python half is taught honestly, including where the type system will not help and a runtime constructor has to.
- **Verified, not recalled.** Every mechanism claim is checked against primary docs: Postgres 18 on `search_path`, Django 6.0 on middleware, Celery 5.6.3 on custom task base classes, the TypeScript handbook on discriminated unions, DRF on `validated_data`.
- **Audience level:** strong programmer, fluent in the Clean Code canon. The course does not re-teach SRP or naming. It teaches the axis Clean Code mostly leaves out: not whether the code reads well, but what the code makes writable.

## What "success" looks like

On the next non-trivial ticket, unprompted:

1. Separate "does it work" from "can it be made to misbehave by code that does not exist yet." *(L1)*
2. Sort a design concern into entities, boundaries, or invariants before proposing a fix. *(L2)*
3. Reach for a discriminated union when a flag decides which fields are valid. *(L3)*
4. Return a type that carries the proof instead of re-checking loose data downstream. *(L4)*
5. Split a function whose parameter is required in only one branch. *(L5)*
6. Enumerate entry points and enforce an invariant at each one, instead of asking every future call site to remember. *(L6)*
7. Separate the correctness argument from the visibility argument when a design disagreement stalls. *(L7)*
8. Write the ten-minute design note, and answer its last question, before typing. *(L8)*

## Notes for the teacher

- The learner drives into mechanism. Each lesson names the principle, shows the wrong shape and the correct shape as code, and states the tell that catches it at design time.
- Prioritise storage strength. These are judgment habits, so the interleaved quiz and spacing matter more than a clean first read.
- Keep correctness and visibility strictly separate from L7 onward. Conflating them is the specific thing that made the original conversation harder than it needed to be.
