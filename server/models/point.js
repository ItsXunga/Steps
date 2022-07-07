const mongoose = require("mongoose");
const { Schema } = mongoose;

const PointSchema = new Schema({
  pinName: {
    type: String,
    required: true,
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
  start: Boolean,
  end: Boolean,
});

module.exports = mongoose.model("Point", PointSchema);
