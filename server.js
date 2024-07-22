// Here is where we import modules
// We begin by loading Express
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");

// DATABASE
require("./config/database");

const Car = require("./models/cars.js");

const app = express();

app.get("/", (res, req, next) => {
  res.render("/views/hime.ejs");
});
