var express = require('express');
var knex = require('../config/knex.js');
var DB = require('../config/DB.js');
var Utils = require('../config/Utils')
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('catalog');
});

module.exports = router;
