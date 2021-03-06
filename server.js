var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
//oAuth pre-req
const session = require("express-session");
const passport = require("passport");
var logger = require("morgan");

// load the env vars
require("dotenv").config();
const methodOverride = require("method-override");

// connect to the MongoDB with mongoose
require("./config/database");
require("./config/passport");
require("./config/cloudinary");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var bikesRouter = require("./routes/bikes");
var bookingsRouter = require("./routes/bookings");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/", bikesRouter);
app.use("/", bookingsRouter);

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
  res.render("error");
});

module.exports = app;
