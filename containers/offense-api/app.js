var express = require('express');

var app = express();


app.listen(3001, () => console.log('API listening on port 3001!'))

app.get('/', function (req, res) {
    res.send({
        "status": "Good"
    })
});

module.exports = app;
