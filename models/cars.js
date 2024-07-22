const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const car = mongoose.model("Plant", carSchema);
module.exports = car;
