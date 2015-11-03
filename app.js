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
var watson = require('watson-developer-cloud');
var mongo = require('mongodb')
var mongoose = require('mongoose')
var csvparser = require("./csvParser.js")
var models = require("./schemas/schemas")


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

  var names = []

  models.Event.find(function(err, events) {
  /*	for (i=0; i<events.length; i++) {
	  	if (names.indexOf(events[i].name) >= 0) {
	  		// do nothing
	  	}
	  	else {
	  		names.push(events[i].name)
	  	}
  	}

  	for (j=0; j<names.length;j++) {
  		models.Program.create({
  			name: names[j]
  		})
  	}
  
  	*/
  	for (i=0; i<events.length; i++) {
  		csvparser.check(events[i].name, events[i]._id, events[i].eventType)
  	}
  })
});

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});
