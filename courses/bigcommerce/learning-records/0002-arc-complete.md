# 0002 — Full arc built (L1–L8 + quiz)

**Date:** 2026-07-23

## What happened

Learner said "complete all the lessons now." Built L4–L8 + the interleaved review quiz in one batch, after gathering sources via 5 parallel research subagents (one per remaining topic: pricing, discounts landscape, promotions engine, consignments, order object). Each agent returned verbatim doc quotes + real field names + scrubbed example objects from official BigCommerce docs.

## Course shape (final)

L1 pipeline · L2 catalog · L3 line items · L4 pricing · L5 discounts landscape · L6 promotions engine · L7 consignments · L8 order object · L9 quiz. Glossary covers all 8. Every lesson: concept → BigCommerce → API-with-example-object → synthesis → key line / trap / recall.

## Durability phase

Course is complete; now in spacing/retrieval phase. Do NOT re-teach the arc. Push the quiz cold, spaced days apart. Re-explain a lesson only if the learner misses it twice.

## Accuracy caveats carried from research (verify before asserting as canonical)

- Order-transaction `event`/`status` enums: v3 transactions page 404'd on `.md` — fields captured, enum values NOT verified. Left out of teaching.
- Order-coupon integer `type` enum mapping: verify against live data if it matters.
- Default `status_id` on API order create is documented inconsistently (overview says 1; example shows 0; also "Awaiting Fulfillment") — taught as "set it explicitly."
- `priority` field on promotions: documented as concept ("lower = higher") but not present in JSON examples — taught rule order + stop flags as the reliable levers.

## Possible future arcs (out of current mission scope)

Apps/OAuth + webhooks; B2B Edition; Stencil storefront theming; tax provider integration; GraphQL Storefront depth.
