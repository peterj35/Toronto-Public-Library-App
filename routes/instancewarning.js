var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('instancewarning')
})

module.exports = router