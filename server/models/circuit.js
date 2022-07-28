const mongoose = require("mongoose");
const { Schema } = mongoose;

const CircuitSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a name for your Route"],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Please enter a category for your Route"],
  },
  desc: {
    type: String,
    required: [true, "Please enter a description for your Route"],
  },
  pins: [
    {
      pinName: {
        type: String,
        required: [true, "Please enter a name for your Pin"],
      },
      pinDesc: {
        type: String,
      },
      lat: {
        type: String,
        required: true,
      },
      long: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Circuit", CircuitSchema);
