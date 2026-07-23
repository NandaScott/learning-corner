# Working notes — BigCommerce course

## Learner preferences (topic-specific)

- Wants the repeating **concept → BigCommerce → in the API** shape in every lesson. This is non-negotiable structure for this course.
- Keep the generic concept *light* — a paragraph or two — then spend the depth on BigCommerce specifics.
- **Every "Where it surfaces in the API" section must include a scrubbed example object** (real field names from the docs, most values trimmed/elided). The learner wants to *see* the shape of each object to anchor the mental model. Applies to every lesson; retrofit earlier lessons too.
- Level: some BigCommerce exposure; the object model is the gap.

## Sourcing mechanics (important)

- `docs.bigcommerce.com` and `developer.bigcommerce.com` are **JS-rendered SPAs** — plain WebFetch of the HTML page returns a 404 shell.
- **Fix: append `.md` to the doc path** and fetch `docs.bigcommerce.com/...` — the platform serves a clean Markdown version. Example: `https://docs.bigcommerce.com/developer/docs/storefront/headless/orders.md`.
- `developer.bigcommerce.com/docs/...` 301-redirects to `docs.bigcommerce.com/docs/...`. Fetch the docs host directly.
- Example objects must use **real field names verified against the docs** — never invent a schema from memory.

## Terminology to nail (verify each against docs before teaching)

- **Consignment** — "a list of physical products that will travel together to the purchaser, and it specifies how those items can and will ship." Items + address + shipping option. A shipment-in-waiting.
- **Checkout** — a cart plus a billing address and consignments; the staging object before an order.
- **Cart** — collection of items/prices/discounts; holds *no* customer data.
- Catalog: **product** (entity) / **variant** (SKU, on the shelf, tracks inventory) / **variant option** (facet, generates variants) / **modifier** (changes fulfillment, not SKU, no inventory). Every product has a **base variant**.
- Discounts: keep **coupon** vs **promotion** vs **product sale price** vs **cart-level discount** strictly distinct — BigCommerce treats them as different objects/APIs.

## API surface map (fill in as verified)

- Cart, Checkout, Consignment: REST **Storefront** API and REST **Management** API both expose these; GraphQL Storefront too.
- Catalog (products/variants/options/modifiers): REST **Management** v3 Catalog. Legacy v2 catalog has a different flatter shape — check version.
- Orders: REST **Management** API.
- Note: `consignment_structure=object` param on order includes; legacy array structure deprecating **1 Feb 2026**.

## Arc status — COMPLETE (L1–L8 + quiz + glossary)

- L1 cart → checkout → order pipeline
- L2 catalog: products, variants, options, modifiers
- L3 line items (four types, option_selections, snapshot)
- L4 pricing (price order-of-operations, price lists, calculated_price, tax)
- L5 discounts landscape (sale price / automatic / coupon; two coupon systems)
- L6 promotions rule engine (rules → condition + action; first-match; stacking)
- L7 consignments (multi-address, available vs selected options, BOPIS, order object structure)
- L8 order object (15-status lifecycle, sub-resources, manual create, shipments)
- L9 interleaved review quiz (24 Q, 3/lesson)
- All API sections carry scrubbed example objects (learner preference). Glossary + overview + hub card current.

## Now in durability/spacing phase — don't re-teach the arc

- Sourced entirely from official BigCommerce docs via 5 parallel research agents (pricing, discounts, promotions, consignments, order). Reports captured verbatim quotes + real field names.
- Flagged uncertainties left as "verify against live data": order-transaction event/status enums (v3 page 404'd); order-coupon integer type mapping; default status_id on API create is documented inconsistently (set explicitly).
- Next possible arcs (out of current scope): apps/OAuth + webhooks; B2B Edition; Stencil storefront theming; tax provider integration.
