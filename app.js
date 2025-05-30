var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const createAdminUser = require("./functions/createAdminUser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var tasksRouter = require("./routes/tasks");

//database setup with sync
const db = require("./models");
db.sequelize.sync({ force: true });

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let AdminUser;
app.use(async function (req, res, next) {
  if (AdminUser) {
    return next();
  } else {
    await createAdminUser()
      .then(() => {
        AdminUser = true;
        return next();
      })
      .catch((e) => {
        throw new Error(`Failed to create admin user ${e}`);
      });
  }
});
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line to parse URL-encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(bodyParser.json()); // for parsing application/json
app.use(cookieParser());

// public files and node modules
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/js",
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js/")),
);
app.use(
  "/css",
  express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css/")),
);

// router endpoint binding
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.warn("forward error middleware called");
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
