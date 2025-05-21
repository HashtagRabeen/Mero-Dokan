const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/MeroDokan");
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Mongodb error", error);
  }
};

module.exports = connectDb;
