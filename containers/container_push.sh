# Create ECR (if not already existing)
aws ecr create-repository --repository-name "service-slayer-arbiter-api"
aws ecr create-repository --repository-name "service-slayer-defense-api"
aws ecr create-repository --repository-name "service-slayer-offense-api"

ACCOUNT_ID=$(aws sts get-caller-identity |  jq -r '.Account')
$(aws ecr get-login --no-include-email --region us-east-1)

docker build -t service-slayer-arbiter-api ./arbiter-api/
docker tag service-slayer-arbiter-api:latest $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/service-slayer-arbiter-api:latest
docker push $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/service-slayer-arbiter-api:latest

docker build -t service-slayer-defense-api ./defense-api/
docker tag service-slayer-defense-api:latest $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/service-slayer-defense-api:latest
docker push $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/service-slayer-defense-api:latest

docker build -t service-slayer-offense-api ./offense-api/
docker tag service-slayer-offense-api:latest $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/service-slayer-offense-api:latest
docker push $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/service-slayer-offense-api:latest
