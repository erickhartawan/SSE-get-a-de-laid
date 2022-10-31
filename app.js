var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
// const cookieSession = require('cookie-session')
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var helmet = require("helmet");
var cors = require('cors');
const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
var cors = require('cors')

var client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});
client.connect();
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(helmet());
app.use(cors());
app.use(
    helmet.contentSecurityPolicy({
        useDefaults: false,
        directives: {
            defaultSrc: ["'self'"]
            // scriptSrc: ["'self'", "'unsafe-inline'"],
            // styleSrc: ["'self'", "fonts.googleapis.com"],
            // fontSrc: ["'self'", "fonts.gstatic.com"],
            // connectSrc: ["'self'", "wss://video.geekwisdom.net"],
        },
    })
);
// app.use(csrf());
app.use(helmet.dnsPrefetchControl({ allow: false })); 
app.use(helmet.frameguard({ action: 'deny' }));
app.disable('x-powered-by');
const sixtyDaysInSeconds = 5184000 // 60 * 24 * 60 * 60
app.use(helmet.hsts({maxAge: sixtyDaysInSeconds}));
app.use(helmet.xssFilter());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.disable("x-powered-by");

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
});

(module.exports = app), client;
