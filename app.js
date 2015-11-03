/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var cfenv = require('cfenv');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongo = require('mongodb')
var mongoose = require('mongoose')
var csvparser = require("./csvParser.js")

var Event = require("./schemas/schemas")

// create a new express server
var app = express();
var appEnv = cfenv.getAppEnv();

// Set the template engine to use EJS
app.set('view engine', 'ejs');

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// Setup routes
var index = require('./routes/index');
var catalog = require('./routes/catalog');
var analytics = require('./routes/analytics');
var createprogram = require('./routes/createprogram');

app.use('/', index);
app.use('/catalog', catalog);
app.use('/analytics', analytics);
app.use('/createprogram', createprogram);


var MongoClient = mongo.MongoClient

mongoose.connect("mongodb://Administrator:justpingme1@ds049104.mongolab.com:49104/teampingme", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});
