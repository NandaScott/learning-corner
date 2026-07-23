# Mission

**Build domain fluency in ecommerce as BigCommerce implements it — enough to explain, cold, how BigCommerce models orders, line items, discounts, consignments and the pipeline that connects them.**

## Why this mission

The learner has some BigCommerce exposure but lacks the domain model underneath it. The felt gap: "if someone asks me how BigCommerce works, I'd flounder." Success is being able to answer confidently and precisely — not to ship a specific integration by a deadline. This is a fluency course, not an integration project.

## The shape every lesson takes

The learner asked for one repeating structure, and it is the spine of this course:

1. **The concept** — plainly, generically. What this thing is in any ecommerce system.
2. **How BigCommerce handles it** — the specific mechanics, the actual object, BigCommerce's own terminology.
3. **Where it surfaces in the API** — the endpoint(s) and fields that expose the concept, so the model is concrete and checkable.

Then close per repo convention: key line, common trap, recall widget.

## Grounding constraints

- **Sourcing: official BigCommerce documentation, exclusively**, for everything that isn't generic domain background. Every BigCommerce-specific claim cites docs.bigcommerce.com / the Developer Center. No blog folklore, no parametric memory.
- **Conceptual first, then specific.** Keep the generic concept light and correct, then layer BigCommerce on top. Flag explicitly where BigCommerce diverges from the generic textbook model.
- **Level:** comfortable engineer with some BigCommerce exposure. The object model is the gap, not programming.

## What "success" looks like

The learner can, unprompted, walk through:

1. The **cart → checkout → order** pipeline: what each object is, why they are separate, what triggers each handoff.
2. **Line items**: how a catalog product becomes a line item, the line-item types, and why a line item is a snapshot.
3. **Consignments**: BigCommerce's term for a shipment-in-waiting — items + address + shipping option — and how they split a cart across destinations.
4. **Discount structures**: coupons vs automatic promotions vs product sale prices vs cart-level discounts, and the promotions rule engine (conditions + actions).
5. **The order object**: its statuses and lifecycle, what it carries, and how it relates back to the cart it came from.
6. **Pricing**: base price, variant/option adjustments, price lists and customer groups, tax-inclusive vs exclusive.
7. Which **API** owns which object (REST Management vs REST Storefront vs GraphQL Storefront).

## Out of scope (for now)

- Storefront theming (Stencil), Widgets, and front-end templating.
- Payments processor internals (covered conceptually only; there is a separate Stripe course for money movement).
- Apps/OAuth scopes, webhooks plumbing (may become a later arc).
- BigCommerce's B2B Edition specifics.

## Notes for the teacher

- Every lesson: concept → BigCommerce → API, then key line / trap / recall (repo convention).
- Prioritize storage strength: retrieval practice, spacing, interleaving once material accumulates.
- Build strictly forward — no forward references.
