var express = require('express');
var bodyparser = require('body-parser')
var router = express.Router();
var db = require('../db.js')

router.post("/", function(req, res) {

	db.createProgram(req.body.title, req.body.eventtype, req.body.agegroup)	

	res.redirect("/catalog")
})

module.exports = router