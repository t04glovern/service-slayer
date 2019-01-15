docker build -t sneaky-snake-offense-api ./offense-api/
docker tag sneaky-snake-offense-api:latest 277790246569.dkr.ecr.us-east-1.amazonaws.com/sneaky-snake-offense-api:latest
docker push 277790246569.dkr.ecr.us-east-1.amazonaws.com/sneaky-snake-offense-api:latest

docker build -t sneaky-snake-defense-api ./defense-api/
docker tag sneaky-snake-defense-api:latest 277790246569.dkr.ecr.us-east-1.amazonaws.com/sneaky-snake-defense-api:latest
docker push 277790246569.dkr.ecr.us-east-1.amazonaws.com/sneaky-snake-defense-api:latest
