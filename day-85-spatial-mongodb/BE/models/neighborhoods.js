const mongoose = require("mongoose");

const neighborhoodsSchema = new mongoose.Schema(
  {
    name: String,
    location: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  {
    collection: "neighborhoods",
  }
);

const Neighborhood = mongoose.model("Neighborhood", neighborhoodsSchema);

module.exports = Neighborhood;
