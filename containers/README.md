# Containers

## Auth Docker to ECR

```bash
# MacOS or Linux
$(aws ecr get-login --no-include-email --region us-east-1)

# Windows
Invoke-Expression -Command (aws ecr get-login --no-include-email --region us-east-1)
```

## Quick Start

Build and push the containers to these repos

```bash
./container_push.sh
```
