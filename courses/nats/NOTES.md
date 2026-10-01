# Notes — NATS and JetStream

## Origin

Requested 2026-10-01: "learn more about NATS, including advisories, streams, DLQs." Answers at course start: designing a new microservice system, NATS already chosen, brand new to NATS, TypeScript client (nats.js v3). Advisories and DLQs came from a design doc. Synadia Cloud is the managed service under evaluation, and it has no native DLQ "as conceptualized". The success bar is making design decisions with the mechanics understood.

Messaging background was not stated. Do not lean on Kafka/SQS/RabbitMQ comparisons as the main explanation. Mention the SQS/RabbitMQ DLQ model only to name the expectation NATS does not meet.

## Course shape (built 2026-10-01)

1. Core NATS: subjects, wildcards, pub/sub, at-most-once delivery.
2. Queue groups and request-reply: load balancing without a broker queue.
3. JetStream streams: what persistence adds, retention policies.
4. Consumers: durable vs ephemeral, pull vs push, deliver policy.
5. Acks: ack, nak (with delay), term, in-progress; AckWait and redelivery.
6. Giving up: MaxDeliver, BackOff, MaxAckPending.
7. Advisories: what they are, the subjects, the payloads.
8. The DLQ pattern on NATS: capture advisories, fetch by stream sequence, failure modes.
9. Synthesis: designing failure handling for one service end to end.

## Teaching decisions

- Core before JetStream. "No DLQ" makes sense only once it is clear that core NATS keeps nothing and JetStream keeps everything until a retention rule removes it.
- Acks before advisories. An advisory about max deliveries means nothing until redelivery is understood.

## Build notes (2026-10-01)

- All nine lessons, the interleaved review (L10, 35 questions), the glossary and a printable failure-handling cheat sheet were built in one pass from `research-notes.md`.
- Every nats.js snippet beyond the README examples is composed from type signatures and has not been run. Each lesson says so where it applies. A good first exercise is running the L9 sketch against a local `nats-server` and correcting anything that breaks.
- Claims flagged in the lessons as inferred, not documented: Interest-retention behaviour after MaxDeliver; the exact moment the max-deliveries advisory fires; advisories being scoped to the stream's account; replay being refused inside the dedupe window when the advisory `id` is reused as `msgID`.
- Synadia Cloud open questions (server version, whether advisory capture is allowed): no public docs. Revisit when the learner hears back from Synadia or NATS Slack, and correct the lessons openly.

## Next zone of proximal development

Durability first: run the L10 review cold after a few days. Then a hands-on lesson running the L9 design against a local server (`nats-server -js`) to prove the composed code and watch the advisories fire. Possible follow-ons: priority groups and consumer pause (2.11+), per-message TTL, and per-flow subject design for the actual services.
