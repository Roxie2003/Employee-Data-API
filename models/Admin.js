const mongoose = require("mongoose");
const { Schema } = mongoose;
const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    email : {
      type: String,
      unique: true,
      required: [true, "Please add Password"],
    },
    password : {
      type: String,
      required: [true, "Please add Password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Admin", adminSchema);
