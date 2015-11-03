var express = require('express');
var router = express.Router();

router.get('/:name', function(req,res,next){
  DB.getName(req.params.name);
})
