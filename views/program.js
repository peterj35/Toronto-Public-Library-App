var express = require('express');
var DB = require('../config/DB.js');
var router = express.Router();

router.get('/:name', function(req,res,next){
  DB.getName(req.params.name, function())
})
