const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  type: String,
  name: String,
  electric: Boolean,
  v8: Boolean,
});

const car = mongoose.model("car", carSchema);
module.exports = car;
