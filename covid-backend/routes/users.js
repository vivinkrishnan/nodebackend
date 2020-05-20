var express = require('express');
var router = express.Router();
const data = require('./file.json')
//const fs = require('fs');

/*
let student;

fs.readFile('file.json', (err, data) => {
  if (err) throw err;
  student = JSON.parse(data);
  console.log(student);
});
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log(JSON.stringify(data));
  res.send('Covid cases'  + JSON.stringify(data) );
  //res.send('Hello User');

});

module.exports = router;
