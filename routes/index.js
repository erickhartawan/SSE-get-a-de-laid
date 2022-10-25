var express = require('express');
var app = require('.././app');
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
      console.log(res.rows[0]);
      await client.end();
  } catch (error) {
      console.log(error)
  }
} 

async function validateUser(email, password) {
  try {
    if (!client.connect()) {
      await client.connect();
    }
      const res = await client.query("select * from userdetails where user_email = '" + email + "' and user_password = '" + password + "';");
      console.log(res)
      var userData = {
        "firstName": res.rows[0].first_name,
        "lastName": res.rows[0].last_name,
        "dpLink": res.rows[0].dp_link,

      }
      console.log(userData);
      await client.end();
      return userData;
  } catch (error) {
      console.log(error)
  }
}

function responseMaker (data, message, success) {
  try {
    // var jsonResponse = {};
    if (data != "") {
      var jsonResponse = {
        "data": data,
        "message": message,
        "success": success
      };
    } else {
      var jsonResponse = {
        "message": message,
        "success": success
      };
    }
    return jsonResponse;
  } catch (error) {
      console.log(error)
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(responseMaker("", "hello world", true));
});

//? ===Login API===

//? GET Request  
// router.get('/login', function(req, res, next) {
//   createUser();
//   res.json(responseMaker("", "enter login credentials", true));
// });

//? POST Request 
router.post('/login', function(req, res, next) {
  var userEmail = req.body.userEmail; //TODO change variable after discussing with the frontend team
  var userPassword = req.body.userPassword; //TODO change variable after discussing with the frontend team
  console.log(userEmail);
  const userData = validateUser(userEmail, userPassword);
  res.json(responseMaker(userData, "correct credentials", true));
});

module.exports = router;