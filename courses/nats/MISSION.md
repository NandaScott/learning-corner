# Mission: NATS and JetStream for a microservice design

## Why

A microservice project has already chosen NATS. The design has to handle messages that fail: poison messages, downstream outages, retries that never succeed. The managed service under evaluation (Synadia Cloud) has no built-in dead-letter queue in the SQS/RabbitMQ sense. Failure handling there is assembled from JetStream mechanics: delivery limits, acks, and advisories. Making sound design decisions requires knowing those mechanics, not the vocabulary alone.

## Success looks like

- Read a JetStream stream and consumer config and predict what happens to a message that fails: how often it is redelivered, when, and where it ends up.
- Choose retention policy, ack policy, `AckWait`, `MaxDeliver`, and `BackOff` for a given service and defend each choice.
- Explain what an advisory is, which advisories fire when delivery gives up, and what their payloads contain.
- Design a DLQ pattern on NATS (advisory capture plus message lookup by stream sequence) and state its failure modes and limits.
- Separate what core NATS guarantees from what JetStream adds, so the design picks the right layer per message flow.
- Read and write the matching TypeScript (nats.js v3, `@nats-io/*` packages) to prototype a choice.

## Constraints

- Brand new to NATS. Comfortable with code and messaging concepts in general.
- Client stack: TypeScript (nats.js v3).
- Target environment: Synadia Cloud (managed NATS). Flag where managed-service limits or account settings differ from self-hosted `nats-server`.
- Goal is design judgment. Mechanism depth over API surface coverage.

## Out of scope

- Operating `nats-server` yourself: clustering internals, Raft tuning, leaf-node topology.
- Security setup (accounts, JWTs, nkeys) beyond what a lesson needs to connect.
- Key-value and object store, unless a design decision needs them.
