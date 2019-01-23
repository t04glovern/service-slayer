#!/bin/sh

## Creates S3 bucket
# aws s3 mb s3://devopstar

## S3 cloudformation deployments
### Base
aws s3 cp cloudformation/base/fargate-cluster.yaml s3://devopstar/resources/sneaky-snake/cloudformation/base/fargate-cluster.yaml
aws s3 cp cloudformation/base/fargate-service.yaml s3://devopstar/resources/sneaky-snake/cloudformation/base/fargate-service.yaml
aws s3 cp cloudformation/base/vpc-networking.yaml s3://devopstar/resources/sneaky-snake/cloudformation/base/vpc-networking.yaml
### Extended
aws s3 cp cloudformation/extended/fargate-service-arbiter.yaml s3://devopstar/resources/sneaky-snake/cloudformation/extended/fargate-service-arbiter.yaml
