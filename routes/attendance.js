const express = require("express");
const router = express.Router();

const employeeAttendance = [
  {
    attendance: [
      {
        month_year: "Aug22",
        present_days: 21,
        overtime_hrs: 3,
      },
      {
        month_year: "Sep22",
        present_days: 22,
        overtime_hrs: 2,
      },
      {
        month_year: "Oct22",
        present_days: 20,
        overtime_hrs: 0,
      },
      {
        month_year: "Nov22",
        present_days: 22,
        overtime_hrs: 3,
      },
      {
        month_year: "Dec22",
        present_days: 18,
        overtime_hrs: 0,
      },
      {
        month_year: "Jan23",
        present_days: 21,
        overtime_hrs: 2,
      },
      {
        month_year: "Feb23",
        present_days: 20,
        overtime_hrs: 0,
      },
    ],
  },
  {
    attendance: [
      {
        month_year: "Dec22",
        present_days: 24,
        overtime_hrs: 9,
      },
      {
        month_year: "Jan23",
        present_days: 20,
        overtime_hrs: 3,
      },
      {
        month_year: "Feb23",
        present_days: 21,
        overtime_hrs: 0,
      },
    ],
  },
  {
    attendance: [
      {
        month_year: "Oct22",
        present_days: 23,
        overtime_hrs: 10,
      },
      {
        month_year: "Nov22",
        present_days: 20,
        overtime_hrs: 0,
      },
      {
        month_year: "Dec22",
        present_days: 21,
        overtime_hrs: 0,
      },
      {
        month_year: "Jan23",
        present_days: 23,
        overtime_hrs: 0,
      },
      {
        month_year: "Feb23",
        present_days: 22,
        overtime_hrs: 0,
      },
    ],
  },
  {
    attendance: [
      {
        month_year: "Nov22",
        present_days: 22,
        overtime_hrs: 0,
      },
      {
        month_year: "Dec22",
        present_days: 21,
        overtime_hrs: 0,
      },
      {
        month_year: "Jan23",
        present_days: 24,
        overtime_hrs: 10,
      },
      {
        month_year: "Feb23",
        present_days: 23,
        overtime_hrs: 0,
      },
    ],
  },
  {
    attendance: [
      {
        month_year: "Oct22",
        present_days: 20,
        overtime_hrs: 0,
      },
      {
        month_year: "Nov22",
        present_days: 21,
        overtime_hrs: 0,
      },
      {
        month_year: "Dec22",
        present_days: 20,
        overtime_hrs: 0,
      },
      {
        month_year: "Jan23",
        present_days: 22,
        overtime_hrs: 5,
      },
      {
        month_year: "Feb23",
        present_days: 21,
        overtime_hrs: 0,
      },
    ],
  },
  {
    attendance: [
      {
        month_year: "Jan23",
        present_days: 23,
        overtime_hrs: 0,
      },
      {
        month_year: "Feb23",
        present_days: 22,
        overtime_hrs: 0,
      },
    ],
  },
  {
    attendance: [
      {
        month_year: "Nov22",
        present_days: 21,
        overtime_hrs: 0,
      },
      {
        month_year: "Dec22",
        present_days: 20,
        overtime_hrs: 3,
      },
      {
        month_year: "Jan23",
        present_days: 22,
        overtime_hrs: 0,
      },
      {
        month_year: "Feb23",
        present_days: 24,
        overtime_hrs: 0,
      },
    ],
  },
  {
    attendance: [
      {
        month_year: "Feb23",
        present_days: 23,
        overtime_hrs: 0,
      },
    ],
  },
  {
    attendance: [
      {
        month_year: "Jan23",
        present_days: 23,
        overtime_hrs: 0,
      },
      {
        month_year: "Feb23",
        present_days: 21,
        overtime_hrs: 0,
      },
    ],
  },
  {
    attendance: [
      {
        month_year: "Sep22",
        present_days: 23,
        overtime_hrs: 0,
      },
      {
        month_year: "Oct22",
        present_days: 21,
        overtime_hrs: 0,
      },
      {
        month_year: "Nov22",
        present_days: 20,
        overtime_hrs: 0,
      },
      {
        month_year: "Dec22",
        present_days: 25,
        overtime_hrs: 10,
      },
      {
        month_year: "Jan23",
        present_days: 22,
        overtime_hrs: 0,
      },
      {
        month_year: "Feb23",
        present_days: 24,
        overtime_hrs: 0,
      },
    ],
  },
];

const employee = async (req, res) => {
  res.status(200).json(employeeAttendance[req.params.id - 1]["attendance"]);
  return;
};

router.get("/:id", employee);

module.exports = router;
