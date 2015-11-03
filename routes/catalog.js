var express = require('express');
var router = express.Router();
var models = require("../schemas/schemas")

/* GET about page. */
router.get('/', function(req, res, next) {
    models.Program.find(function(err, events) {
    	if (err) {
    		console.log(err)
    	}
    	res.render('catalog', {
    		programs: events
    	})
    })
});

router.get('/:programName', function(req, res) {
	var programName = req.params.programName

	models.Event.find({name: programName}, function(err, events) {
		if (err) {
			console.log(err)
		}
		res.render('instances', {
			events: events,
			'programName': programName
		})
	})
})

module.exports = router;
