# Containers

Create the container repositories you'll need

```bash
aws ecr create-repository --repository-name "sneaky-snake-arbiter-api"
aws ecr create-repository --repository-name "sneaky-snake-defense-api"
aws ecr create-repository --repository-name "sneaky-snake-offense-api"
```

## Auth Docker to ECR

```bash
# MacOS or Linux
$(aws ecr get-login --no-include-email --region us-east-1)

# Windows
Invoke-Expression -Command (aws ecr get-login --no-include-email --region us-east-1)
```

## Build / Deploy

Build and push the containers to these repos

```bash
./container_push.sh
```
