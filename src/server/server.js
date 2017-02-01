var express = require('express');
var path = require('path');

var port = 8080;

var app = express();

app.use(express.static(__dirname + './../client/public'));

app.get('/', function(req, res) {
  res.sendFile('index');
});

app.listen(port, function() {
  console.log('Listening to port: ' + port);
});

