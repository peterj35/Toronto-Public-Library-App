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
var dbutil = require('./db.js')


// create a new express server
var app = express();
var appEnv = cfenv.getAppEnv();

// Set the template engine to use EJS
app.set('view engine', 'ejs');

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.use(bodyParser())

// Setup routes
var index = require('./routes/index');
var catalog = require('./routes/catalog');
var analytics = require('./routes/analytics');
var createprogram = require('./routes/createprogram');
var createinstance = require('./routes/createinstance');
var texttospeech = require('./routes/text-to-speech');
var programsubmit = require('./routes/programsubmit');
//var program = require('./routes/program');


app.use('/', index);
app.use('/catalog', catalog);
app.use('/analytics', analytics);
app.use('/createprogram', createprogram);
app.use('/text-to-speech', texttospeech);
app.use('/programsubmit', programsubmit);
app.use('/catalog/:programName', catalog)
app.use('/createinstance', createinstance)

//catalog.use('/program', program);


// For local development, replace username and password
var textToSpeech = watson.text_to_speech({
  version: 'v1',
  username: "be90a5c2-03f2-439c-a75f-4d0fd1659c5e",
  password: "JGJOaqk28pi4"
});

app.get('/api/synthesize', function(req, res, next) {
  var transcript = textToSpeech.synthesize(req.query);
  transcript.on('response', function(response) {
    if (req.query.download) {
      response.headers['content-disposition'] = 'attachment; filename=transcript.ogg';
    }
  });
  transcript.on('error', function(error) {
    next(error);
  });
  transcript.pipe(res);
});

var MongoClient = mongo.MongoClient

mongoose.connect("mongodb://Administrator:justpingme1@ds049104.mongolab.com:49104/teampingme", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
})

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});
