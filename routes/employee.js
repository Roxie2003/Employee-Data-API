const express = require("express");
const router = express.Router();

const employeeDetails = [
  {
    id: 1,
    employee_name: "Tiger Nixon",
    base_salary: 320800,
    designation: "Software developer",
    location: "Nashik",
    date_of_joining: "2022-08-16",
    bank_details: {
      acc_no: "099999999923",
      name: "ICICI Bank",
      IFSC_code: "ICIC0000999",
    },
    attendance_url:
      "https://employee-data-api.vercel.app/api/employee/attendance/1",
  },
  {
    id: 2,
    employee_name: "Garrett Winters",
    base_salary: 170750,
    designation: "Web developer",
    location: "Mumbai",
    date_of_joining: "2022-12-10",
    bank_details: {
      acc_no: "099999999998",
      name: "HDFC Bank",
      IFSC_code: "HDFC0000999",
    },
    attendance_url:
      "https://employee-data-api.vercel.app/api/employee/attendance/2",
  },
  {
    id: 3,
    employee_name: "Ashton Cox",
    base_salary: 86000,
    designation: "Software developer",
    location: "Nashik",
    date_of_joining: "2022-10-25",
    bank_details: {
      acc_no: "099999999905",
      name: "SBI Bank",
      IFSC_code: "SBI0000999",
    },
    attendance_url:
      "https://employee-data-api.vercel.app/api/employee/attendance/3",
  },
  {
    id: 4,
    employee_name: "Cedric Kelly",
    base_salary: 433060,
    designation: "Full Stack developer",
    location: "Pune",
    date_of_joining: "2022-11-16",
    bank_details: {
      acc_no: "099999999934",
      name: "ICICI Bank",
      IFSC_code: "ICIC0000999",
    },
    attendance_url:
      "https://employee-data-api.vercel.app/api/employee/attendance/4",
  },
  {
    id: 5,
    employee_name: "Airi Satou",
    base_salary: 162700,
    designation: "Data scientist",
    location: "Nashik",
    date_of_joining: "2022-10-20",
    bank_details: {
      acc_no: "099999999945",
      name: "HDFC Bank",
      IFSC_code: "HDFC0000999",
    },
    attendance_url:
      "https://employee-data-api.vercel.app/api/employee/attendance/5",
  },
  {
    id: 6,
    employee_name: "Brielle Williamson",
    base_salary: 372000,
    designation: "Web developer",
    location: "Banglore",
    date_of_joining: "2023-01-16",
    bank_details: {
      acc_no: "099999999999",
      name: "CBI Bank",
      IFSC_code: "CBI0000999",
    },
    attendance_url:
      "https://employee-data-api.vercel.app/api/employee/attendance/6",
  },
  {
    id: 7,
    employee_name: "Herrod Chandler",
    base_salary: 137500,
    designation: "Mobile App developer",
    location: "Mumbai",
    date_of_joining: "2022-11-16",
    bank_details: {
      acc_no: "099999999945",
      name: "ICICI Bank",
      IFSC_code: "ICIC0000999",
    },
    attendance_url:
      "https://employee-data-api.vercel.app/api/employee/attendance/7",
  },
  {
    id: 8,
    employee_name: "Rhona Davidson",
    base_salary: 327900,
    designation: "Full Stack developer",
    location: "Nashik",
    date_of_joining: "2023-02-27",
    bank_details: {
      acc_no: "099999999976",
      name: "SBI Bank",
      IFSC_code: "SBI0000999",
    },
    attendance_url:
      "https://employee-data-api.vercel.app/api/employee/attendance/8",
  },
  {
    id: 9,
    employee_name: "Colleen Hurst",
    base_salary: 205500,
    designation: "Data Scientist",
    location: "Nashik",
    date_of_joining: "2023-01-06",
    bank_details: {
      acc_no: "099999999989",
      name: "CBI Bank",
      IFSC_code: "CBI0000999",
    },
    attendance_url:
      "https://employee-data-api.vercel.app/api/employee/attendance/9",
  },
  {
    id: 10,
    employee_name: "Sonya Frost",
    base_salary: 103600,
    designation: "Data analyst",
    location: "Pune ",
    date_of_joining: "2022-09-16",
    bank_details: {
      acc_no: "0999999999983",
      name: "CBI Bank",
      IFSC_code: "CBI0000999",
    },
    attendance_url:
      "https://employee-data-api.vercel.app/api/employee/attendance/10",
  },
];

const employee = async (req, res) => {
  res.status(200).json(employeeDetails[req.params.id - 1]);
  return;
};

router.get("/:id", employee);

module.exports = router;
