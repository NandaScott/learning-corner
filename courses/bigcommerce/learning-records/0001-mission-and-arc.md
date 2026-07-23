# 0001 — Mission set, arc proposed, L1 built

**Date:** 2026-07-22

## Decision

Mission established as **domain fluency** in ecommerce-as-BigCommerce, not an integration deadline. Trigger quote from the learner: "if someone asks me how BigCommerce works then I'd flounder."

## Lesson shape (locked)

Every lesson follows **concept → how BigCommerce handles it → where it surfaces in the API**, then the repo-standard key line / trap / recall. Learner asked for this explicitly; keep the generic concept light and spend depth on BigCommerce specifics.

## Level

Some BigCommerce exposure; the object model is the gap, not programming.

## Arc proposed

L1 pipeline (built) → L2 catalog/products → L3 line items → L4 pricing → L5 discounts landscape → L6 promotions rule engine → L7 consignments → L8 order object → quiz + glossary. Named pillars from the learner: orders, line items, discount structures, consignments. Arc not yet confirmed by learner.

## Built this session

- MISSION.md, NOTES.md, RESOURCES.md, glossary (starter), overview.html, hub card.
- L1: cart → checkout → order pipeline. Key facts sourced: cart holds no customer data; billing address promotes cart→checkout; every consignment needs `selected_shipping_option` before conversion; order created `incomplete` → `Awaiting Fulfillment` after payment.

## Sourcing note

docs.bigcommerce.com is a JS SPA — WebFetch the `.md` variant of a doc path (see NOTES.md). This is how L1 was sourced.
