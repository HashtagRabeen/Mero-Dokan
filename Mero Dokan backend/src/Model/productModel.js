const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Vegetables",
        "Non Veg",
        "Beverages",
        "Fruits",
        "Dairy Products",
        "Personal Care",
        "Masalas",
        "Packaged Foods",
        "Others",
      ], //only one of these value will be selected
      default: " ", //we have given others as default
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true, //to remove extra space
    },
    image: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      enum: ["kg", "liter", "piece", "pack", "ml", "g", "dozen"],
      default: " ",
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
