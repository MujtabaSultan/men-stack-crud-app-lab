// Here is where we import modules
// We begin by loading Express
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");

// DATABASE
require("./config/database");

const Fruit = require("./models/fruit.js");

const app = express();
