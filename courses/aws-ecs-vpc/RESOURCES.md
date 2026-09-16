# Resources — AWS: VPC and ECS at whiteboard depth

Nothing in this course is taught from memory. Every page below was fetched and read before the lesson that cites it was written. AWS adds and renames capacity options often, so the documentation is the only trusted source here.

## Primary sources, one per lesson

| Lesson | Claim it grounds | Primary source |
|---|---|---|
| L1 | What a VPC is, default VPC behaviour, what costs money | Amazon VPC User Guide, "How Amazon VPC works". <https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html> |
| L2 | A subnet is an IP range inside one Availability Zone | Amazon VPC User Guide, "What is Amazon VPC?" (Features). <https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html> |
| L3 | Route tables, routes, implicit association with the main route table | Amazon VPC User Guide, "How Amazon VPC works" (Route tables). <https://docs.aws.amazon.com/vpc/latest/userguide/how-it-works.html#what-is-route-tables> |
| L4 | NAT gateway semantics and connection direction | Amazon VPC User Guide, "NAT gateways". <https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html> |
| L4 | VPC endpoints, interface against gateway | AWS PrivateLink, "AWS PrivateLink concepts". <https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html> |
| L5 | Security groups against network ACLs, full comparison table | Amazon VPC User Guide, "Infrastructure security in Amazon VPC". <https://docs.aws.amazon.com/vpc/latest/userguide/infrastructure-security.html> |
| L5 | Security group basics and statefulness | Amazon VPC User Guide, "Control traffic to your AWS resources using security groups". <https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html> |
| L6 | ECS layers, task definition, task, service, scheduler | Amazon ECS Developer Guide, "What is Amazon Elastic Container Service?". <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html> |
| L6 | Service scheduler behaviour, replacement on failed health checks | Amazon ECS Developer Guide, "Amazon ECS services". <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html> |
| L7 | Cluster types, capacity providers, ECS Managed Instances | Amazon ECS Developer Guide, "Amazon ECS clusters". <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/clusters.html> |
| L7 | Fargate isolation boundary and what it removes | Amazon ECS Developer Guide, "Architect for AWS Fargate for Amazon ECS". <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html> |
| L8 | `awsvpc` mode, one ENI per task, subnets and security groups | Amazon ECS Developer Guide, "Allocate a network interface for an Amazon ECS task". <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking-awsvpc.html> |
| L8 | Fargate task networking, public IP option, image pull route | Amazon ECS Developer Guide, "Amazon ECS task networking options for Fargate". <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-task-networking.html> |
| L9 | Load balancer choice for an ECS service | Amazon ECS Developer Guide, "Use load balancing to distribute Amazon ECS service traffic". <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html> |
| L9 | Listeners, rules, target groups, health checks, layer 7 | Application Load Balancer User Guide, "What is an Application Load Balancer?". <https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html> |

## Claims worth re-reading at the source

These are the statements the course leans on hardest, with the exact wording from the docs.

- **VPC.** "A *virtual private cloud* (VPC) is a virtual network dedicated to your AWS account. It is logically isolated from other virtual networks in the AWS Cloud." ("How Amazon VPC works")
- **Subnet.** "A subnet is a range of IP addresses in your VPC. A subnet must reside in a single Availability Zone." ("What is Amazon VPC?")
- **Route table.** "A *route table* contains a set of rules, called routes, that are used to determine where network traffic from your VPC is directed." Also: a subnet not explicitly associated with a route table "is implicitly associated with the main route table." ("How Amazon VPC works")
- **NAT gateway.** "You can use a NAT gateway so that instances in a private subnet can connect to services outside your VPC but external services can't initiate a connection with those instances." Also: "Connections must always be initiated from within the VPC containing the NAT gateway." ("NAT gateways")
- **PrivateLink.** "Traffic between a VPC endpoint and an endpoint service or resource stays within the AWS network, without traversing the public internet." Gateway endpoints, for Amazon S3 and DynamoDB, "do not use AWS PrivateLink, unlike the other types of VPC endpoints." ("AWS PrivateLink concepts")
- **Security groups against network ACLs.** Instance level against subnet level; allow rules only against allow and deny rules; "Evaluates all rules before deciding whether to allow traffic" against "Evaluates rules in ascending order until a match for the traffic is found"; return traffic "Automatically allowed (stateful)" against "Must be explicitly allowed (stateless)". ("Infrastructure security in Amazon VPC")
- **ECS.** "Amazon Elastic Container Service (Amazon ECS) is a fully managed container orchestration service." Its three layers are capacity, controller, and provisioning. ("What is Amazon ECS?")
- **Service.** "If one of your tasks fails or stops, the Amazon ECS service scheduler launches another instance of your task definition to replace it." ("Amazon ECS services")
- **Cluster.** "An Amazon ECS cluster is a logical grouping of tasks or services that provides the infrastructure capacity for your containerized applications." Also: "Clusters are AWS Region specific." ("Amazon ECS clusters")
- **Fargate.** "Each Fargate task has its own isolation boundary and does not share the underlying kernel, CPU resources, memory resources, or elastic network interface with another task." ("Architect for AWS Fargate")
- **Task ENI.** "Each Amazon ECS task that uses the `awsvpc` network mode receives its own elastic network interface (ENI)." Target groups for such services "must choose `ip` as the target type. Do not use `instance`." ("Allocate a network interface for an Amazon ECS task")
- **Fargate internet access.** "For a task on Fargate to pull a container image, the task must have a route to the internet", satisfied by a public IP in a public subnet, a NAT gateway from a private subnet, or an Amazon ECR interface VPC endpoint. ("Amazon ECS task networking options for Fargate")

## Reading path, in order

1. **Amazon VPC User Guide, "How Amazon VPC works"** — the whole conceptual model in one page. Read it first and read it twice.
2. **Amazon VPC User Guide, "Infrastructure security in Amazon VPC"** — the security group against network ACL comparison table, which is the single most quotable table in this topic.
3. **Amazon ECS Developer Guide, "What is Amazon ECS?"** — the capacity / controller / provisioning split, which is the frame the rest of the ECS docs assume.
4. **Amazon ECS Developer Guide, "Allocate a network interface for an Amazon ECS task"** — where the two halves of this course meet.
5. **Amazon ECS best practices guide, networking section** — <https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/networking.html>. Inbound, outbound, and service-to-service patterns, written as recommendations rather than reference.

## Communities

Interview answers get sharper against people who run this daily.

- **r/aws** — <https://www.reddit.com/r/aws/>. Architecture-question threads are frequent and the corrections are fast.
- **AWS re:Post** — <https://repost.aws/>. The official successor to the AWS forums. Searchable, and answers tend to cite documentation.
- **AWS Community Builders and local AWS user groups** — <https://aws.amazon.com/developer/community/usergroups/>. Whiteboard practice with people who will push back on a hand-wave.
- **Containers from the Couch** — <https://containersfromthecouch.com/>. AWS container team streams, useful for hearing practitioners describe ECS choices out loud.
