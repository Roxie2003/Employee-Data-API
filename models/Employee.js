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
      required: [true, "Please add base salary"],
    },
    designation: {
      type: String,
      required: [true, "Please add designation"],
    },
    location: {
      type: String
    },
    date_of_joining: {
      type: Date,
      required: [true, "Please add date of joining"],
    },
    bank_details: {
      acc_no:{
        type: Number,
        required: [true, "Please add account number"],
      },
      name:{
        type: String,
        required: [true, "Please add account name"],
      },
      IFSC_code:{
        type: String,
        required: [true, "Please add bank IFSc code"],
      }
    },
    attendance: [
      {
        month_year : {
          type: String
        },
        present_days : {
          type: Number
        },
        overtime_hrs : {
          type: Number
        },
      }
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Employee", employeeSchema);
