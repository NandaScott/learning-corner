# Mission

**Explain ECS and VPC out loud, at whiteboard depth, without reaching for mechanics the question did not ask for.**

## Why this mission

The learner is preparing for interviews. The failure mode in an AWS networking question is not forgetting a CLI flag; it is giving an answer made of nouns ("you put the tasks in a VPC and the load balancer routes to them") with no model underneath it. A strong answer names the *decision* each component represents: what a subnet decides, what a route table decides, what a security group decides, what ECS decides on your behalf and what it does not.

The course is therefore conceptual on purpose. It teaches what each piece is for, what it replaces, and where the boundary between two pieces sits. It does not teach console click paths, Terraform, or parameter reference.

## Grounding constraints

- **Interview shape, not runbook shape.** Every lesson closes on a line that can be said out loud in one breath, plus the near-miss answer that sounds right and is subtly wrong.
- **Verified, not recalled.** Every claim is checked against the AWS documentation, primarily the Amazon VPC User Guide, the Amazon ECS Developer Guide, and the Application Load Balancer User Guide. AWS renames and adds capacity options often, so parametric memory is not trusted anywhere in this course.
- **Baseline.** The learner has launched EC2 instances and created S3 buckets, and has never built the networking or owned an ECS setup. Nothing assumes prior container orchestration experience. Nothing re-teaches what a container is.

## What "success" looks like

Asked any of these cold, the answer arrives in a sentence and can then be expanded:

1. What a VPC is, and what layer of the problem it solves. *(L1)*
2. Why a subnet exists at all, and what an Availability Zone has to do with it. *(L2)*
3. What actually makes a subnet public. *(L3)*
4. The three ways traffic leaves a VPC, and which direction each one permits. *(L4)*
5. Security groups against network ACLs, stated as a difference in kind rather than a list of trivia. *(L5)*
6. What ECS is responsible for: cluster, task definition, task, service, and the reconciliation loop. *(L6)*
7. Fargate against EC2 capacity, framed as who owns the box. *(L7)*
8. Why an ECS task with `awsvpc` networking is a first-class citizen of the VPC, and what follows from that. *(L8)*
9. The full request path, drawn from the internet to the database, with each hop justified. *(L9)*

## Notes for the teacher

- Stay conceptual. The learner explicitly asked for the model, not the mechanics. Mechanism gets taught only where the mechanism *is* the concept, for example the fact that a public subnet is defined by its route table rather than by a setting named "public".
- The learner drives into mechanism when curious. Answer follow-ups at full depth in chat rather than thickening the lessons.
- Interview framing throughout: the key line is what to say, the trap is what separates a real answer from a memorised one.
