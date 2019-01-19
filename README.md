# SneakySnake

## Deploy Test Containers

**Note:** Provide your VPC and Subnets (atleast 2) in the `cloudformation/deployment-params.json` file

```bash
aws cloudformation create-stack \
    --stack-name "sneaky-snake" \
    --template-body file://cloudformation/deployment.yaml \
    --parameters file://cloudformation/deployment-params.json \
    --capabilities CAPABILITY_IAM
```

### Resources

* **AWS::ECS::Cluster**:            sneaky-snake-cluster
* **AWS::ECS::Service**:            sneaky-snake-offense-api-service
* **AWS::ECS::Service**:            sneaky-snake-defense-api-service
* **AWS::ECS::TaskDefinition**:     sneaky-snake-defense-api-task
* **AWS::ECS::TaskDefinition**:     sneaky-snake-offense-api-task

### Endpoints

* **defense-api**: `http://<sneaky-snake-defense-api-lb>:3000/`
* **offense-api**: `http://<sneaky-snake-offense-api-lb>:3001/`

## Research

### List Tasks

```bash
aws ecs list-tasks --cluster sneaky-snake-cluster
```

### Stop Tasks

```bash
aws ecs stop-task --task <task_id> --cluster sneaky-snake-cluster
```
