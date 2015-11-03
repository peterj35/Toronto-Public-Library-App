var express = require('express');
var router = express.Router();
var models = require("../schemas/schemas")

/* GET about page. */
router.get('/', function(req, res, next) {
    models.Program.find(function(err, events) {
    	if (err) {
    		console.log(err)
    	}
    	console.log(events)
    	res.render('catalog', {
    		programs: events
    	})
    })
});

module.exports = router;
