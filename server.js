// Here is where we import modules
// We begin by loading Express
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.use(methodOverride('_method'));

// DATABASE
require("./config/database");

app.use(express.urlencoded({ extended: false }));

//const Car = require("./models/cars.js");

const carCntrl = require("./controller/car.js");

app.get("/", carCntrl.home);
app.get("/cars", carCntrl.index);
app.get("/cars/new", carCntrl.new1);
app.post("/cars", carCntrl.create);
app.get("/cars/:carId", carCntrl.show);
app.delete("/cars/:carId", carCntrl.delete1);



app.get("/cars/:carId/edit", carCntrl.edit);
app.put("/cars/:carId", carCntrl.update);
app.listen(3000, () => {
  console.log("The express app is ready!");
});
