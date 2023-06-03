const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  path: String,
  caption: String,
});

const IMAGE = mongoose.model("Image", ImageSchema);

module.exports = IMAGE;
