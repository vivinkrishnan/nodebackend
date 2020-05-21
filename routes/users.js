var express = require('express');
var router = express.Router();
const data = require('./file.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send('Covid cases'  + JSON.stringify(data) );
  
});

module.exports = router;
