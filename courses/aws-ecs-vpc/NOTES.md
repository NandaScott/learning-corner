# Notes — AWS: VPC and ECS at whiteboard depth

## Origin

Requested 2026-09-16 with a tight scope: "ECS and VPC at a high level, conceptually, not mechanically." Mission answers given at course start: **interview preparation**, with a baseline of having launched EC2 instances and S3 buckets and never having built the networking or owned an ECS setup.

## Course shape

Nine lessons in three arcs, then an interleaved quiz. Two references: a glossary and a printable whiteboard sheet holding the reference diagram plus the one-sentence answers.

- **Arc 1 — The network**: L1 what a VPC is, L2 subnets and Availability Zones, L3 route tables and what public means, L4 the three doors out, L5 security groups against network ACLs.
- **Arc 2 — The compute**: L6 what ECS is responsible for, L7 who owns the box.
- **Arc 3 — Where they meet**: L8 the task as a network citizen, L9 the whiteboard walkthrough (synthesis).

## Teaching decisions

- **Network before compute.** ECS placement decisions are stated in VPC vocabulary (subnets, security groups, target type), so the VPC half has to land first or L8 becomes a list of nouns.
- **Route tables before gateways.** "Public subnet" is the single most common shallow answer in this topic. L3 establishes that the route table is what decides, which makes L4's gateways ordinary destinations rather than magic.
- **Direction of connection initiation is the spine of L4.** Internet gateway, NAT gateway, and VPC endpoint differ mainly in who may start the conversation. Framing them that way makes the trio one idea instead of three facts.
- **Capacity is a separate lesson from orchestration.** Fargate against EC2 is the question that actually gets asked, and it only makes sense once the cluster/task/service split from L6 is in place.
- **ECS Managed Instances is named, briefly.** The docs now list it as a third capacity type and recommend it for most new workloads. Leaving it out would date the course, so L7 names it and does not dwell.
- **No console paths, no Terraform, no parameter reference.** The learner asked for concepts. Mechanism appears only where it is the concept.

## Verified, not recalled

Every claim was checked against AWS documentation before it was written. See `RESOURCES.md` for the list. Points worth flagging because they are commonly stated wrongly:

- A public subnet has no "public" attribute. It is public because its associated route table sends `0.0.0.0/0` to an internet gateway.
- Security groups are stateful and evaluate all rules; network ACLs are stateless and evaluate numbered rules in ascending order until a match.
- Tasks in `awsvpc` mode must register with target groups whose target type is `ip`, because the target is an ENI rather than an instance.
- Internet access for a Fargate task in a public subnet requires a public IP on the task ENI. The blanket statement that tasks in public subnets have no internet access appears in the docs in the EC2-hosted context, where task ENIs do not get public addresses.
- A Fargate task needs a route to the internet to pull its image, or an interface VPC endpoint for Amazon ECR.

## Voice

Follows `article-voice` over the `ai-tells` blocklist. Emdashes in headings only. The marked key line callout stays punchy by the repo carve-out.

## Next zone of proximal development

Durability first: re-run the L10 quiz cold after a week. Then, if the interview track continues, the natural follow-ons are service-to-service connectivity (Service Connect, service discovery, VPC Lattice), deployment strategies (rolling against blue/green), and the IAM split between task role and task execution role, which this course names in the glossary and deliberately does not teach.
