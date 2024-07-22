// Here is where we import modules
// We begin by loading Express
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));

// DATABASE
require("./config/database");

//const Car = require("./models/cars.js");

const carCntrl = require("./controller/car.js");

app.get("/", carCntrl.home);
app.get("/cars", carCntrl.index);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
