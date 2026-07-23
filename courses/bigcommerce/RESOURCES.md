# Resources

Official BigCommerce documentation only, per the mission's sourcing rule. Fetch the `.md` variant of any doc path (the HTML site is a JS SPA — see NOTES.md).

## Primary (Developer Center / docs.bigcommerce.com)

- **Consignments guide** — `docs.bigcommerce.com/developer/docs/admin/checkout-and-cart/custom-checkouts/consignments` — canonical consignment definition and behavior. *(Verified — L1.)*
- **Headless orders / cart-to-order flow** — `docs.bigcommerce.com/developer/docs/storefront/headless/orders` — the cart → checkout → order sequence and the `incomplete` → `Awaiting Fulfillment` status transition. *(Verified — L1.)*
- **Orders (REST Management)** — `developer.bigcommerce.com/docs/rest-management/orders` — order object schema, statuses, `consignment_structure=object`. *(To verify for the order lesson.)*
- **Carts (REST Management / Storefront)** — cart object, line-item types. *(To verify for the line-items lesson.)*
- **Checkouts** — checkout object, billing address, consignments. *(To verify.)*
- **Catalog / Products** — products, variants, SKUs, options, modifiers. *(To verify for the catalog lesson.)*
- **Promotions API** — rule engine: conditions + actions, automatic vs coupon-code. *(To verify for the discounts lessons.)*
- **Coupons** — coupon codes tied to promotions. *(To verify.)*
- **Price Lists / Customer Groups** — pricing overrides per group. *(To verify for the pricing lesson.)*
- **About Our APIs** — `developer.bigcommerce.com/docs/api` — REST Management vs REST Storefront vs GraphQL Storefront. *(To verify.)*

## Community (wisdom)

- **BigCommerce Developer Community** — community.bigcommerce.com/developers — questions on the object model and API behavior.
- **BigCommerce Dev Slack / Discord** — real-time developer help (link from the Developer Center).
- **Stack Overflow `bigcommerce` tag** — practical integration Q&A.
