//Basic express requirements
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

//The express application initialization
var app = express();

//The static resources
app.use('/',express.static(__dirname + '/public'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));

//Couchbase
var cb = require('./cb.js');
var con = cb.connect();

//The service's base URL
var SERVICE_URL = '/service/';

//-- cean: Routers
var get = require('./routes/get.js');
app.use(SERVICE_URL, get);


//Web server
server = app.listen(9000, function () { 
	
	var host = server.address().address
	var port = server.address().port 

	console.log('App listening at http://%s:%s', host, port)
	  
});
