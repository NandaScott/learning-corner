# Teaching notes — Stripe course

## Preferences stated by the learner

- **Sources: Stripe docs exclusively.** Learner said "I'd probably just reference stripe docs exclusively." Every citation should be docs.stripe.com or stripe.com/guides. If Stripe docs genuinely don't cover a mechanism (e.g. card-network internals Stripe abstracts away), flag the gap explicitly rather than importing third-party sources silently.
- **Prose: no AI slop.** Learner explicitly invoked ai-tells. Run article-voice register + ai-tells blocklist on every lesson.
- Mission chosen: internals curiosity (mechanism-level model). Scope: core payments first, then Connect.

## Arc (all built 2026-07-22; course now in durability/spacing phase)

1. The life of a card payment — parties, authorize → capture → settle, three clocks. (L1 ✓)
2. PaymentIntents — the state machine, one intent per cart, Charges as attempts. (L2 ✓)
3. Confirmation and 3DS — frictionless/challenge, issuer decides, liability shift. (L3 ✓)
4. Webhooks — Event objects, 2xx-fast, 3-day retries, HMAC signatures, no order/uniqueness. (L4 ✓)
5. Idempotency — stored-response replay, errors replayed, 24h window. (L5 ✓)
6. Balance and payouts — ledger not vault, net entries, per-entry available_on, negatives. (L6 ✓)
7. Connect I — connected accounts as full accounts, four controller dials, legacy types. (L7 ✓)
8. Connect II — direct/destination/separate charges; liability follows the charge. (L8 ✓)
9. Interleaved review quiz — 25 questions, near-miss convention. (L9 ✓)

Next sessions: spaced retrieval (run the quiz cold), deepen on demand (SetupIntents, disputes,
SCA exemptions, on_behalf_of, Billing arc is explicitly out of scope until learner asks).

## Working notes

- **Learner has no accounting/finance background.** Define every finance term in plain language on first use, with an everyday anchor (hotel-hold, "issuer issued the card"). Glossary created after L1 (`reference/glossary.html`) — canonical; keep it jargon-free and add each new term the lesson it appears.

- Repo conventions apply: lesson flow (concept → numbered map → per-step h3 → synthesis → key line / trap / recall), quiz option[0]=correct + option[1]=near-miss, shared assets at ../../../assets/.
- Stripe docs are versioned by API version but URLs are stable; cite the page, not a version anchor.
