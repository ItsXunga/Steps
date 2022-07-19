const mongoose = require("mongoose");
const { Schema } = mongoose;

const PointSchema = new Schema({
  pinName: {
    type: String,
    required: [true, "Please enter a name for your Pin"],
    unique: true,
  },
  pinDesc: {
    type: String,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Point", PointSchema);
