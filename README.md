# SneakySnake

## Deploy Test Containers

**Note:** Provide your VPC and Subnets (atleast 2) in the `fargate-dummy-params.json` file

```bash
aws cloudformation create-stack \
    --stack-name "sneaky-snake-fargate" \
    --template-body file://aws/fargate.yaml \
    --parameters file://aws/fargate-params.json \
    --capabilities CAPABILITY_IAM
```

* **AWS::ECS::TaskDefinition**:   sneaky-snake-task
* **AWS::ECS::Cluster**:          sneaky-snake-cluster
* **AWS::ECS::Service**:          sneaky-snake-service

### Endpoints

* **defense-api**: `http://endpoint:3000/`
* **offense-api**: `http://endpoint:3001/`

## Research

### List Tasks

```bash
aws ecs list-tasks --cluster sneaky-snake-cluster
```

### Stop Tasks

```bash
aws ecs stop-task --task <task_id> --cluster sneaky-snake-cluster
```
