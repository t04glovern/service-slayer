# Create ECR (if not already existing)
# aws ecr create-repository --repository-name "sneaky-snake-arbiter-api"
# aws ecr create-repository --repository-name "sneaky-snake-defense-api"
# aws ecr create-repository --repository-name "sneaky-snake-offense-api"

ACCOUNT_ID=$(aws sts get-caller-identity |  jq -r '.Account')
$(aws ecr get-login --no-include-email --region us-east-1)

docker build -t sneaky-snake-arbiter-api ./arbiter-api/
docker tag sneaky-snake-arbiter-api:latest $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/sneaky-snake-arbiter-api:latest
docker push $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/sneaky-snake-arbiter-api:latest

docker build -t sneaky-snake-defense-api ./defense-api/
docker tag sneaky-snake-defense-api:latest $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/sneaky-snake-defense-api:latest
docker push $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/sneaky-snake-defense-api:latest

docker build -t sneaky-snake-offense-api ./offense-api/
docker tag sneaky-snake-offense-api:latest $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/sneaky-snake-offense-api:latest
docker push $ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/sneaky-snake-offense-api:latest
