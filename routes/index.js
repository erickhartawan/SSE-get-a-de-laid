var express = require("express");
var app = require(".././app");
var router = express.Router();
const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const { v4 } = require("uuid");
const jwt = require('jsonwebtoken');
const cors = require('cors');
var crypto = require("crypto");
var token = require('crypto').randomBytes(64).toString('hex');
console.log(token);
var sql = require("yesql").pg;
const { initializeApp } = require("firebase/app");
const {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    browserSessionPersistence,
    setPersistence

} = require("firebase/auth");
var onAuthStateChanged = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// app.use(cors());
const firebaseConfig = {

    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
};
const actionCodeSettings = {
    url: "http://localhost:3000/landing", // URL you want to be redirected to after email verification
    handleCodeInApp: true
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);
setPersistence(auth, browserSessionPersistence).then(() => {
    return signInWithEmailAndPassword(auth, email, password);

}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
});

dotenv.config();
var client = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});
client.connect();

function responseMaker(data, message, success) {
    try {
        // var jsonResponse = {};
        if (data != "") {
            var jsonResponse = {
                data: data,
                message: message,
                success: success,
            };
        } else {
            var jsonResponse = {
                message: message,
                success: success,
            };
        }
        return jsonResponse;
    } catch (error) {
        console.log(error);
    }
}

/* GET home page. */
router.get("/", function (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user
        res.send(responseMaker({token}, "hello world", true));
    });
});
//? ===Login API===

//? GET Request
router.get("/login", function (req, res, next) {
    res.json(responseMaker({}, "enter login credentials", true));
});

//? POST Request
router.post("/login", async function (req, res, next) {
    var userEmail = req.body.userEmail; //TODO change variable after discussing with the frontend team
    var userPassword = req.body.userPassword; //TODO change variable after discussing with the frontend team
    userPasswordHash = crypto
        .createHash("sha256")
        .update(userPassword)
        .digest("base64");
    userData = await client.query(
        sql(
            "SELECT * FROM userdetails where user_email = :userEmail AND user_password = :userPassword;"
        )({
            userEmail: userEmail,
            userPassword: userPasswordHash,
        })
    );
    if ((await userData).rowCount > 0) {
        var userToken = jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
        (await userData).rows[0]['token'] = userToken;
        res.json(responseMaker((await userData).rows[0], "user found", true));


    }

    else res.json(responseMaker({}, "user not found", true));
});

router.post("/signup", async function (req, res, next) {
    var newId = v4();
    console.log(req.body);
    var userFirstName = req.body.firstName;
    var userLastName = req.body.lastName;
    var userAge = req.body.age;
    var userPhoneNumber = req.body.phoneNumber;
    var userGender = req.body.gender;
    var userLanguage = req.body.language;
    var userVaccineStatus = req.body.vaccineStatus;
    var userDpLink = req.body.dpLink; // one link for video 
    var userCountry = req.body.country;
    var userBio = req.body.bio;
    var userInterests = req.body.interest;
    let userLastLogin = new Date();
    var userImages = req.body.images; // array of links for images
    var userTravelInterests = req.body.travelInterests;
    var userEmail = req.body.userEmail; //TODO change variable after discussing with the frontend team
    var userPassword = req.body.userPassword; //TODO change variable after discussing with the frontend team
    userPasswordHash = crypto
        .createHash("sha256")
        .update(userPassword)
        .digest("base64");
    userVaccineStatus = userVaccineStatus.split(","); // from string to arrays
    userTravelInterests = userTravelInterests.split(","); // from strings to arrays
    userImages = userImages.split(",")
    userLanguage = userLanguage.toString().split(",");
    var userData = await client.query(
        sql(
            "INSERT INTO userdetails VALUES (:userGuid, :user_first_name, :user_last_name, :user_age, :user_phone, :user_email, :user_country, :user_gender, :user_password, :user_dp_link, :user_last_login, :user_language, :user_authenticated, :user_vaccine_status);"
        )({
            userGuid: newId,
            user_first_name: userFirstName,
            user_last_name: userLastName,
            user_age: userAge,
            user_phone: userPhoneNumber,
            user_email: userEmail,
            user_country: userCountry,
            user_gender: userGender,
            user_password: userPasswordHash,
            user_dp_link: userDpLink,
            user_last_login: userLastLogin,
            user_language: userLanguage,
            user_authenticated: false,
            user_vaccine_status: userVaccineStatus,
        })
    );
    userData = await client.query(
        sql(
            "INSERT INTO userprofile VALUES (:userGuid, :user_profile_user_name, :user_profile_age, :user_profile_bio, :user_profile_images, :user_profile_interests, :user_profile_travel_interests, :user_profile_dp_image);"
        )({
            userGuid: newId,
            user_profile_user_name: userFirstName + " " + userLastName,
            user_profile_age: userAge,
            user_profile_bio: userBio,
            user_profile_images: userImages,
            user_profile_interests: userInterests,
            user_profile_travel_interests: userTravelInterests,
            user_profile_dp_image: userDpLink,
        })
    );
    for (var i = 0; i < userImages.length; i++) {
        userData = await client.query(
            sql(
                "INSERT INTO userimagestorage VALUES (:userGuid, :user_image_img, :user_image_link);"
            )({
                userGuid: newId,
                user_image_img: userImages[i],
                user_image_link: userImages[i],
            })
        );
    }
    createUserWithEmailAndPassword(auth, userEmail, userPasswordHash)
        .then(() => {
            // Signed in
            sendEmailVerification(auth.currentUser, actionCodeSettings).then(() => {
                // Email verification sent!
                console.log("Email verification sent!");
            });
            res.json({ "message": "Your sign in is done" });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    // createUserWithEmailAndPassword(auth, userEmail, userPasswordHash);
});

router.get("/home", async function (req, res, next) {
    var userData = client.query("select * from userprofile;");
    if ((await userData).rowCount > 0)
        res.json(responseMaker((await userData).rows[0], "user found", true));
    else res.json(responseMaker({}, "user not found", true));
});

router.get("/singlechat", async function (req, res, next) {

    var userData = client.query("select * from userprofile;");
    if ((await userData).rowCount > 0)
        res.json(responseMaker((await userData).rows[0], "user found", true));
    else res.json(responseMaker({}, "user not found", true));
});

router.get("/chats", async function (req, res, next) {

    var userData = client.query("select * from userprofile;");
    if ((await userData).rowCount > 0)
        res.json(responseMaker((await userData).rows[0], "user found", true));
    else res.json(responseMaker({}, "user not found", true));
});


module.exports = router;
