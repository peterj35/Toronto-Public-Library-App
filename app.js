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

app.use('/', index);
app.use('/catalog', catalog);
app.use('/analytics', analytics);


// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});
