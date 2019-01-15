var express = require('express');

var app = express();


app.listen(3000, () => console.log('API listening on port 3000!'))

app.get('/', function (req, res) {
    res.send({
        "status": "Good"
    })
});

module.exports = app;
