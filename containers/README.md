# Auth Docker to ECR

```bash
# MacOS or Linux
$(aws ecr get-login --no-include-email --region us-east-1)

# Windows
Invoke-Expression -Command (aws ecr get-login --no-include-email --region us-east-1)
```

## Build / Deploy

```bash
./container_push.sh
```
