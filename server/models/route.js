const mongoose = require("mongoose");
const { Schema } = mongoose;

const RouteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  creator: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  desc: {
    type: String,
  },
  pins: [
    {
      pinName: {
        type: String,
        required: true,
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
    },
  ],
});

module.exports = mongoose.model("Route", RouteSchema);
