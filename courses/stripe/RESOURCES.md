# Stripe Resources

Sourcing rule for this course: **Stripe's own documentation only** (docs.stripe.com and stripe.com guides), per the learner's request. If Stripe's docs don't cover a mechanism, the lesson flags the gap instead of quietly importing a third-party source.

## Knowledge

- [Guide: Introduction to online payments](https://stripe.com/guides/introduction-to-online-payments)
  The four-party model (cardholder, merchant, acquirer, issuer), card networks, gateway/processor roles, interchange and scheme fees. Use for: L1 parties and where Stripe sits.
- [Docs: PaymentIntent lifecycle](https://docs.stripe.com/payments/paymentintents/lifecycle)
  Every PaymentIntent status and its transitions. Use for: L2 state machine, and the canonical status names everywhere.
- [Docs: Place a hold on a payment method (auth & capture)](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method)
  Authorization holds, validity windows per card brand (mostly 7 days card-not-present), partial capture, expiry behavior. Use for: L1 authorize-vs-capture, later manual-capture material.
- [Docs: Receive payouts](https://docs.stripe.com/payouts)
  Pending vs available balance, settlement timing (T+2 US), payout schedules vs settlement timing distinction. Use for: L1 settlement step, L6 balance/payouts lesson.

## Wisdom (Communities)

- Not yet discussed with the learner. Candidates when relevant: Stripe's own developer Discord and Stack Overflow `stripe-payments` tag. Ask before adding.

## Gaps

- Card-network internals (what Visa/Mastercard do between acquirer and issuer, clearing files, interchange qualification) are abstracted in Stripe's docs. If the course needs that depth, it will require non-Stripe primary sources (network documentation) — surface to learner first.
