const mongoose = require("mongoose");
const { Schema } = mongoose;

const CircuitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  desc: {
    type: String,
  },
  pins: [
    {
      type: Schema.Types.ObjectId,
      ref: "Point",
    },
  ],
});

module.exports = mongoose.model("Circuit", CircuitSchema);
