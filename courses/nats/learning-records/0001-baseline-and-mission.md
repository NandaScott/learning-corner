# Baseline: new to NATS, designing failure handling on Synadia Cloud

The learner is brand new to NATS and is designing a microservice system where NATS is already chosen. Dead-letter handling and advisories came from a design doc. The managed service under evaluation (Synadia Cloud) has no DLQ in the SQS/RabbitMQ sense, so the course has to teach the JetStream mechanics a DLQ is built from. Client stack is TypeScript (nats.js v3). Messaging background was not stated, so lessons do not lean on comparisons with other brokers.

**Implications:** start at core NATS (L1) and build forward to acks, MaxDeliver, advisories, and the DLQ pattern. The goal is design judgment, so each lesson ends on what a mechanic means for a design choice.
