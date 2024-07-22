const Car = require("../models/cars.js");

const home = async (req, res) => {
  res.render("home.ejs");
};

const new1 = (req, res) => {
  res.render("cars/new.ejs");
};

const create = async (req, res) => {
  console.log(req.body);
  req.body.v8 = req.body.v8 === "on";
  req.body.electric = req.body.electric === "on";
  await Car.create(req.body);
  res.redirect("/cars");
};

const index = async (req, res) => {
  const foundcars = await Car.find();
  res.render("cars/index.ejs", { cars: foundcars });
};

const show = async (req, res) => {
  const car = await Car.findById(req.params.carId);
  res.render("cars/show.ejs", { car });
};

const update = async (req, res) => {
  req.body.v8 = req.body.v8 === "on";
  req.body.electric = req.body.electric === "on";
  await Car.findByIdAndUpdate(req.params.carId, req.body);
  res.redirect(`/cars`);
};

const delete1 = async (req, res) => {
  console.log("Deleting car with ID:", req.params.carId);
  await Car.findByIdAndDelete(req.params.carId);
  res.redirect("/cars");
};

const edit = async (req, res) => {
  const foundcar = await Car.findById(req.params.carId);
  res.render("cars/edit.ejs", { car: foundcar });
};

module.exports = {
  home,
  new1,
  create,
  index,
  show,
  delete1,
  update,
  edit,
};
