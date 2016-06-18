
var express = require('express');
var http = require('http');
var app = express();
var PORT = 8888;

app.use(express.static('assets'));
var httpServer = http.createServer(app).listen(8888, function() {

    console.log('App listening at http://localhost:%s', 8888);
});



