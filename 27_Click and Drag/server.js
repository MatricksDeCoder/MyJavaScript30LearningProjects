var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');//populates the req.body : helps send JSON to server side

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.listen(port, hostname, function(){
  console.log('Server running at port ', port);
});