#!/bin/sh

BUCKET_NAME=devopstar

## Creates S3 bucket
aws s3 mb s3://$BUCKET_NAME

## S3 cloudformation deployments
### Base
aws s3 cp cloudformation/base/fargate-cluster.yaml s3://$BUCKET_NAME/resources/service-slayer/cloudformation/base/fargate-cluster.yaml
aws s3 cp cloudformation/base/fargate-service.yaml s3://$BUCKET_NAME/resources/service-slayer/cloudformation/base/fargate-service.yaml
aws s3 cp cloudformation/base/vpc-networking.yaml s3://$BUCKET_NAME/resources/service-slayer/cloudformation/base/vpc-networking.yaml
### Extended
aws s3 cp cloudformation/extended/fargate-service-arbiter.yaml s3://$BUCKET_NAME/resources/service-slayer/cloudformation/extended/fargate-service-arbiter.yaml
### CI/CD
aws s3 cp cloudformation/cicd/codebuild.yaml s3://$BUCKET_NAME/resources/service-slayer/cloudformation/cicd/codebuild.yaml
