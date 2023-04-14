const mongoose = require("mongoose");
const { Schema } = mongoose;
const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    image: {
      type: String
    },
    base_salary: {
      type: Number,
    },
    designation: {
      type: String,
    },
    location: {
      type: String
    },
    date_of_joining: {
      type: Date,
    },
    bank_details: {
      acc_no:{
        type: Number,
      },
      name:{
        type: String,
      },
      IFSC_code:{
        type: String,
      }
    },
    email : {
      type: String,
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
module.exports = mongoose.model("Employee", employeeSchema);
