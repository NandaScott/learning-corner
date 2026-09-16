# 0001 — Baseline and mission set

**Date:** 2026-09-16
**Status:** Active

## Context

First session on AWS. The request set the scope tightly: ECS and VPC at a high level, conceptually rather than mechanically. Two mission questions were asked before any content was written.

## Mission established

Explain ECS and VPC out loud, at whiteboard depth. Driver: **interview preparation**. See `MISSION.md`.

## Baseline

Stated by the learner: "Somewhere between 2 and 3. I've set up EC2 clusters and some S3 buckets, but I've never done anything that deep. I've also never had to set it up myself."

Read as: comfortable with the AWS console and with the idea of a virtual machine and an object store. No model of the network the instances were sitting in, because the default VPC made that invisible. No exposure to container orchestration on AWS.

## Decisions

- **Network before compute.** Every ECS placement decision is expressed in VPC vocabulary. Teaching ECS first would produce the noun-soup answer the mission exists to prevent.
- **Route tables before gateways.** "What makes a subnet public" is the hinge question in this topic, and the honest answer is a route table entry. Establishing that first turns internet gateways and NAT gateways into ordinary route targets.
- **Connection direction as the spine of the gateways lesson.** Internet gateway, NAT gateway, and VPC endpoint are taught as one idea, differing in who is allowed to open the connection, rather than three separate facts.
- **Capacity split from orchestration.** L6 covers what ECS decides; L7 covers who owns the machine underneath. The Fargate-against-EC2 question is the one that gets asked, and it only parses once the cluster/task/service split exists.
- **ECS Managed Instances named, not dwelt on.** The current docs list three cluster infrastructure types and call Managed Instances the recommended one for most new workloads. Omitting it would make the course wrong within a year; teaching it in depth would exceed the conceptual scope.
- **Deliberately out of scope,** and named in the glossary so the gaps are visible: Service Connect and service discovery, blue/green and rolling deployment configuration, task role against task execution role in detail, IPv6 and dual-stack, VPC peering and Transit Gateway beyond a one-line definition.

## Taught this session

Nine lessons, an interleaved quiz, a glossary, and a printable whiteboard sheet, built in one pass.

- **L1** What a VPC is: a Region-scoped private network defined by an address range, logically isolated per account.
- **L2** Subnets and Availability Zones: a subnet is an IP range inside exactly one AZ, which is why multi-AZ is a subnet decision.
- **L3** Route tables and what public actually means: no "public" attribute exists; a route to an internet gateway is what makes the difference.
- **L4** The three doors out: internet gateway, NAT gateway, VPC endpoint, told as a question about who may initiate the connection.
- **L5** Security groups against network ACLs: stateful instance-level allow-only against stateless subnet-level allow-and-deny, plus the group-references-group idea.
- **L6** What ECS is responsible for: cluster, task definition, task, service, and the desired-count reconciliation loop.
- **L7** Who owns the box: Fargate, EC2, and Managed Instances as points on one axis of ownership.
- **L8** The task as a network citizen: `awsvpc` mode, one ENI per task, security groups per task, target type `ip`.
- **L9** The whiteboard walkthrough: the request path end to end, each hop justified.

## Not yet assessed

- Whether the nine one-sentence answers survive a cold retrieval after a gap of days.
- Whether the learner can defend the near-miss distinctions under follow-up pressure, which is what an interviewer actually probes.

## Next zone of proximal development

Durability first: re-run the quiz cold after a week, then talk through the L9 diagram from a blank page with no prompts. After that, the natural extensions are service-to-service connectivity, deployment strategies, and the IAM role split, all currently glossary-only.
