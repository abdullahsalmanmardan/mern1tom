const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const CATEGORY = mongoose.model("Category", CategorySchema);

module.exports = CATEGORY;
