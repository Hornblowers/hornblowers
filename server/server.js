var express = require('express');

var app = express();

var port = 8080;

app.use(express.static(__dirname + './../client/public'))

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log('listening to port: ' + port);
});