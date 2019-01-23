# Service Slayer

## Architecture

![Architecture](img/architecture.png)

## Deploy Test Containers

```bash
aws cloudformation update-stack \
    --stack-name "service-slayer" \
    --template-body file://cloudformation/deployment.yaml \
    --parameters file://cloudformation/deployment-params.json \
    --capabilities CAPABILITY_IAM
```

### Resources

* **AWS::ECS::Cluster**:            service-slayer-cluster
* **AWS::ECS::Service**:            service-slayer-arbiter-api-service
* **AWS::ECS::Service**:            service-slayer-offense-api-service
* **AWS::ECS::Service**:            service-slayer-defense-api-service
* **AWS::ECS::TaskDefinition**:     service-slayer-arbiter-api-task
* **AWS::ECS::TaskDefinition**:     service-slayer-defense-api-task
* **AWS::ECS::TaskDefinition**:     service-slayer-offense-api-task

### Endpoints

#### Local

* **arbiter-api**: `http://localhost:2999`
* **defense-api**: `http://localhost:3000`
* **offense-api**: `http://localhost:3001`

##### Local Tasks

* **arbiter-api**: `http://localhost:2999/tasks`

#### ALB

* **arbiter-api**: `http://<service-slayer-arbiter-api-lb>` ![arbiter-api](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoicWFhSVY3R2RYTWU2SHkzbC9PaVJRR1ZkaU56RUcxRm5YbTRDTE5oUk1tY3krRTJsc0sxVFBGMlBnb2V2M01GMnpBYUowRUpaeWFIbERXQ3VTVnBtdjZRPSIsIml2UGFyYW1ldGVyU3BlYyI6IjNkMGNtTXdsdTgrb1NvL2kiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)
* **defense-api**: `http://<service-slayer-defense-api-lb>` ![defense-api](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoidWpNMW9hVEpKYmVtbEhXdG9mKzltcnZOazB1TWZyKzMzMTdSR1VZTGczck5hZTBOSW04QVJZbTU5QlJiSk1GTUQ1VUJuTDNGNjFEZG8xVW9GckhLT2pvPSIsIml2UGFyYW1ldGVyU3BlYyI6InhTdFgzSDBZa2V2cEdSU2siLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)
* **offense-api**: `http://<service-slayer-offense-api-lb>` ![offense-api](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiK1NJMEpkWldyY2pkZmpLRkt5VDVxbTVGdUlNVU1JL1h1U29HVEd6VWF4NjcxSDQ1VHdjN2JNSk01dnFoOUhBS2g0SmxpTVd1anBrZWpFM1hDN09yajMwPSIsIml2UGFyYW1ldGVyU3BlYyI6IlpPUUVoUFBPaG11NXFrbW8iLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

##### ALB Tasks

* **arbiter-api**: `http://<service-slayer-arbiter-api-lb>/tasks`
