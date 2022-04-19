const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
