// Create web server
// Load the express module
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");

// Create an instance of the http server to handle HTTP requests
var http = require('http');
var server = http.createServer(app);

// Set up the server to listen on port 8080
server.listen(8080);

// Set up the server to use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

//