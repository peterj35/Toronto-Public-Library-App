var express = require('express');
var router = express.Router();
var models = require("../schemas/schemas")
var db = require('../db.js')

/* GET about page. */
router.get('/:programName', function(req, res, next) {
    res.render('createinstance', {
    	program: req.params.programName
    })
});

router.post('/', function(req, res) {

	if (req.body.eventdate == "2015-07-07") {
		res.redirect('/instancewarning')
	}
	else {
		db.createEvent(req.body.title, req.body.library, req.body.eventtype, req.body.agegroup, req.body.eventdate, req.body.starttime, req.body.endtime)
		res.redirect('/catalog')
	}
})

module.exports = router;
