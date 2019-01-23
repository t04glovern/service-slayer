var AWS = require('aws-sdk');
var express = require('express');

var clusterName = process.env.CLUSTER_NAME;
var regionName = process.env.REGION_NAME

var ecs = new AWS.ECS({
    apiVersion: '2014-11-13',
    region: regionName
});
var app = express();

app.listen(3000, () => console.log('API listening on port 3000!'))

app.get('/', function (req, res) {
    res.send({
        "status": "Good"
    })
});

app.get('/tasks', function (req, res) {
    var params = {
        cluster: clusterName
    };
    ecs.listTasks(params, function (err, data) {
        if (err) console.log(err, err.stack);   // an error occurred
        else res.send({data})                   // successful response
        /*
        data = {
         taskArns: [
            "arn:aws:ecs:us-east-1:012345678910:task/0cc43cdb-3bee-4407-9c26-c0e6ea5bee84",
            "arn:aws:ecs:us-east-1:012345678910:task/6b809ef6-c67e-4467-921f-ee261c15a0a1"
         ]
        }
        */
    });
});

module.exports = app;
