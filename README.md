# SneakySnake

## Deploy Test Containers

```bash
aws cloudformation create-stack \
    --stack-name "sneaky-snake" \
    --template-body file://cloudformation/deployment.yaml \
    --parameters file://cloudformation/deployment-params.json \
    --capabilities CAPABILITY_IAM
```

### Resources

* **AWS::ECS::Cluster**:            sneaky-snake-cluster
* **AWS::ECS::Service**:            sneaky-snake-arbiter-api-service
* **AWS::ECS::Service**:            sneaky-snake-offense-api-service
* **AWS::ECS::Service**:            sneaky-snake-defense-api-service
* **AWS::ECS::TaskDefinition**:     sneaky-snake-arbiter-api-task
* **AWS::ECS::TaskDefinition**:     sneaky-snake-defense-api-task
* **AWS::ECS::TaskDefinition**:     sneaky-snake-offense-api-task

### Endpoints

#### Local

* **arbiter-api**: `http://localhost:2999`
* **defense-api**: `http://localhost:3000`
* **offense-api**: `http://localhost:3001`

##### Local Tasks

* **arbiter-api**: `http://localhost:2999/tasks`


#### ALB

* **arbiter-api**: `http://<sneaky-snake-arbiter-api-lb>`
* **defense-api**: `http://<sneaky-snake-defense-api-lb>`
* **offense-api**: `http://<sneaky-snake-offense-api-lb>`

##### ALB Tasks

* **arbiter-api**: `http://<sneaky-snake-arbiter-api-lb>/tasks`
