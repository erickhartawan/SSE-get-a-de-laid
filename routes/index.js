var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//? ===Login API===

//? GET Request 
router.get('/login', function(req, res, next) {
  var response = {
    "success": true,
    "message": "enter login credentials"
  };
  res.json(response);
});

//? POST Request 
router.get('/login', function(req, res, next) {
  var userEmail = res.userEmail; //TODO change variable after discussing with the frontend team
  var userPassword = res.password; //TODO change variable after discussing with the frontend team
  var response = {
    "success": true,
    "message": "enter login credentials"
  };
  res.json(response);
});

module.exports = router;
