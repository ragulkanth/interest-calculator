var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.listen(port, function () {
    console.log('Listening on http://localhost:' + port);
});
