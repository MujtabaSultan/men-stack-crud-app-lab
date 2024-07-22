const Car = require("../models/cars.js");
const home = async (req, res) => {
  res.render("home.ejs");
};
const new1 = (req, res) => {
  res.render("cars/new.ejs");
};
const create = async (req, res) => {
  req.body.isReadyToEat = req.body.isReadyToEat === "on";
  await Car.create(req.body);
  res.redirect("/cars");
};
// Display all cars
const index = async (req, res) => {
  const foundcars = await Car.find();
  res.render("cars/index.ejs", { cars: foundcars });
};
const show = async (req, res) => {
  const foundcar = await Car.findById(req.params.carId);
  res.render("cars/show.ejs", {
    car: foundcar,
  });
};
const delete1 = async (req, res) => {
  await Car.findByIdAndDelete(req.params.carId);
  res.redirect("/cars");
};
const update = async (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  await Car.findByIdAndUpdate(req.params.carId, req.body);
  res.redirect(`/cars`);
};
const edit = async (req, res) => {
  const foundcar = await Car.findById(req.params.carId);
  res.render("cars/edit.ejs", {
    car: foundcar,
  });
};
// ...continue for other routes
module.exports = {
  home,
  new1,
  create,
  index,
  show,
  delete1,
  update,
  edit,
  // export other functions
};
