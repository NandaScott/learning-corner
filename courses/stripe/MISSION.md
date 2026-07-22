# Mission

**Build a mechanism-level mental model of how Stripe works — what actually happens when money moves — deep enough to explain the machinery, not just call the API.**

## Why this mission

Internals curiosity, not an integration deadline. The user wants the model under the API surface: how a card payment actually executes, what a PaymentIntent's state machine is really tracking, how money physically settles, and how Connect routes funds between parties. Success is being able to answer "but what is Stripe *doing* there?" at every layer.

## Grounding constraints

- **Sourcing: Stripe's own documentation, exclusively.** Every mechanism claim cites docs.stripe.com (or stripe.com guides). No blog-post folklore, no parametric memory.
- **Scope order:** core payments first (parties, authorization/capture/settlement, PaymentIntents, confirmation, webhooks, idempotency, payouts), then Platform/Connect (account types, charge types, money flows).
- **Starting level:** comfortable engineer, no payments-domain background assumed. Build bottom-up from the card networks, not top-down from the SDK.

## What "success" looks like

The user can, unprompted, walk through:
1. The parties in a card payment and the authorization → capture → settlement sequence — where Stripe sits in it.
2. The PaymentIntent state machine: every status, what transition causes it, and why the object exists at all.
3. How confirmation works client- vs server-side, and what 3DS/SCA inserts into the flow.
4. Why webhooks (not API responses) are the source of truth for payment outcomes.
5. How idempotency keys make retries safe, mechanically.
6. Where the money is between capture and payout — balance, settlement timing, payout schedules.
7. Connect's charge types (direct, destination, separate charges & transfers) and who holds liability and fees in each.

## Out of scope (for now)

- Billing/subscriptions/invoicing (may become a later arc).
- Terminal, Issuing, Treasury, Radar internals.
- Integration code walkthroughs — this is a mechanism course, code appears only to illustrate mechanism.

## Notes for the teacher

- Every lesson: key line, common trap, recall widget (repo convention).
- Prioritize storage strength: retrieval practice, spacing, interleaving once material accumulates.
