const mongoose = require("mongoose");
const { Schema } = mongoose;
const salarySlipSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    designation: {
      type: String,
      required: [true, "Please add designation"],
    },
    employee_id: {
      type: Number,
      required: [true, "Please add Id"],
    },
    income_tax: {
      type: Number,
      required: [true, "Please add income tax amount"],
    },
    location: {
      type: String,
    },
    date_of_joining: {
      type: Date,
      required: [true, "Please add date of joining"],
    },
    bank_details: {
      acc_no: {
        type: Number,
        required: [true, "Please add account number"],
      },
      name: {
        type: String,
        required: [true, "Please add account name"],
      },
      IFSC_code: {
        type: String,
        required: [true, "Please add bank IFSc code"],
      },
    },
    attendance: [
      {
        month_year: {
          type: String,
        },
        present_days: {
          type: Number,
        },
        overtime_hrs: {
          type: Number,
        },
      },
    ],
    total_salary: {
      type: Number,
      required: [true, "Can't create a Salary Slip without Total Salary"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("SalarySlip", salarySlipSchema);
