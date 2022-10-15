var express = require('express');
var router = express.Router();
const { Client } = require("pg");
const dotenv = require("dotenv");
const { v4 } = require('uuid');
dotenv.config();
 
var client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});


const createUser = async () => {
  try {
      var newId = v4();
      if (!client.connect()) {
        client.connect();
      }
      const res = await client.query("Insert into userdetails VALUES('" + newId + "', 'rahul', 'patel', 23, 0406704836, 'rahulghetia67@gmail.com', 'India', 'Male', ARRAY [ 'English', 'Hindi', 'Gujarati' ], ARRAY [true, true], 'root', 'https://google.com');");
      console.log(res);
      await client.end();
  } catch (error) {
      console.log(error)
  }
} 

const validateUser = async () => {
  try {
      await client.connect();
      const res = await client.query("select * from userdetails where ;");
      console.log(res.rows[0]);
      await client.end();
  } catch (error) {
      console.log(error)
  }
} 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resourcessss');
});

//? ===Login API===

//? GET Request 
router.get('/login', function(req, res, next) {
  createUser();
  var response = {
    "success": true,
    "message": "enter login credentials"
  };
  res.json(response);
});

//? POST Request 
router.post('/login', function(req, res, next) {
  var userEmail = res.userEmail; //TODO change variable after discussing with the frontend team
  var userPassword = res.password; //TODO change variable after discussing with the frontend team
  var response = {
    "success": true,
    "message": "enter login credentials"
  };
  res.json(response);
});

module.exports = router;