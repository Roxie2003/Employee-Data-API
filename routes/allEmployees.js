const express = require("express");
const router = express.Router();

/*const allEmployees = {
  count: 12,
  previous: null,
  results: [
    {
      id: 1,
      url: "https://employee-data-api.vercel.app/api/employee/1/",
    },
    {
      id: 2,
      url: "https://employee-data-api.vercel.app/api/employee/2/",
    },
    {
      id: 3,
      url: "https://employee-data-api.vercel.app/api/employee/3/",
    },
    {
      id: 4,
      url: "https://employee-data-api.vercel.app/api/employee/4/",
    },
    {
      id: 5,
      url: "https://employee-data-api.vercel.app/api/employee/5/",
    },
    {
      id: 6,
      url: "https://employee-data-api.vercel.app/api/employee/6/",
    },
    {
      id: 7,
      url: "https://employee-data-api.vercel.app/api/employee/7/",
    },
    {
      id: 8,
      url: "https://employee-data-api.vercel.app/api/employee/8/",
    },
    {
      id: 9,
      url: "https://employee-data-api.vercel.app/api/employee/9/",
    },
    {
      id: 10,
      url: "https://employee-data-api.vercel.app/api/employee/10/",
    },
  ],
};
*/

const allEmployees = {
  count: 10,
  previous: null,
  results: [
    {
      id: 1,
      name: "Tiger Nixon",
      image: "/images/1.jpg",
      base_salary: 320800,
      designation: "Software developer",
      location: "Nashik",
      date_of_joining: "2022-08-16",
      bank_details: {
        acc_no: "099999999923",
        name: "ICICI Bank",
        IFSC_code: "ICIC0000999",
      },
      attendance: [
        {
          month_year: "Aug-2022",
          present_days: 21,
          overtime_hrs: 3,
        },
        {
          month_year: "Sep-2022",
          present_days: 22,
          overtime_hrs: 2,
        },
        {
          month_year: "Oct-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Nov-2022",
          present_days: 22,
          overtime_hrs: 3,
        },
        {
          month_year: "Dec-2022",
          present_days: 18,
          overtime_hrs: 0,
        },
        {
          month_year: "Jan-2023",
          present_days: 21,
          overtime_hrs: 2,
        },
        {
          month_year: "Feb-2023",
          present_days: 20,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 2,
      name: "Garrett Winters",
      image: "/images/2.jpg",
      base_salary: 170750,
      designation: "Web developer",
      location: "Mumbai",
      date_of_joining: "2022-12-10",
      bank_details: {
        acc_no: "099999999998",
        name: "HDFC Bank",
        IFSC_code: "HDFC0000999",
      },
      attendance: [
        {
          month_year: "Dec-2022",
          present_days: 24,
          overtime_hrs: 9,
        },
        {
          month_year: "Jan-2023",
          present_days: 20,
          overtime_hrs: 3,
        },
        {
          month_year: "Feb-2023",
          present_days: 21,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 3,
      name: "Ashton Cox",
      image: "/images/3.jpg",
      base_salary: 86000,
      designation: "Software developer",
      location: "Nashik",
      date_of_joining: "2022-10-25",
      bank_details: {
        acc_no: "099999999905",
        name: "SBI Bank",
        IFSC_code: "SBI0000999",
      },
      attendance: [
        {
          month_year: "Oct-2022",
          present_days: 23,
          overtime_hrs: 10,
        },
        {
          month_year: "Nov-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Dec-2022",
          present_days: 21,
          overtime_hrs: 0,
        },
        {
          month_year: "Jan-2023",
          present_days: 23,
          overtime_hrs: 0,
        },
        {
          month_year: "Feb-2023",
          present_days: 22,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 4,
      name: "Cedric Kelly",
      image: "/images/4.jpg",
      base_salary: 433060,
      designation: "Full Stack developer",
      location: "Pune",
      date_of_joining: "2022-11-16",
      bank_details: {
        acc_no: "099999999934",
        name: "ICICI Bank",
        IFSC_code: "ICIC0000999",
      },
      attendance: [
        {
          month_year: "Nov-2022",
          present_days: 22,
          overtime_hrs: 0,
        },
        {
          month_year: "Dec-2022",
          present_days: 21,
          overtime_hrs: 0,
        },
        {
          month_year: "Jan-2023",
          present_days: 24,
          overtime_hrs: 10,
        },
        {
          month_year: "Feb-2023",
          present_days: 23,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 5,
      name: "Airi Satou",
      image: "/images/5.jpg",
      base_salary: 162700,
      designation: "Data scientist",
      location: "Nashik",
      date_of_joining: "2022-10-20",
      bank_details: {
        acc_no: "099999999945",
        name: "HDFC Bank",
        IFSC_code: "HDFC0000999",
      },
      attendance: [
        {
          month_year: "Oct-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Nov-2022",
          present_days: 21,
          overtime_hrs: 0,
        },
        {
          month_year: "Dec-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Jan-2023",
          present_days: 22,
          overtime_hrs: 5,
        },
        {
          month_year: "Feb-2023",
          present_days: 21,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 6,
      name: "Brielle Williamson",
      image: "/images/6.jpg",
      base_salary: 372000,
      designation: "Web developer",
      location: "Banglore",
      date_of_joining: "2023-01-16",
      bank_details: {
        acc_no: "099999999999",
        name: "CBI Bank",
        IFSC_code: "CBI0000999",
      },
      attendance: [
        {
          month_year: "Jan-2023",
          present_days: 23,
          overtime_hrs: 0,
        },
        {
          month_year: "Feb-2023",
          present_days: 22,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 7,
      name: "Herrod Chandler",
      image: "/images/7.jpg",
      base_salary: 137500,
      designation: "Mobile App developer",
      location: "Mumbai",
      date_of_joining: "2022-11-16",
      bank_details: {
        acc_no: "099999999945",
        name: "ICICI Bank",
        IFSC_code: "ICIC0000999",
      },
      attendance: [
        {
          month_year: "Nov-2022",
          present_days: 21,
          overtime_hrs: 0,
        },
        {
          month_year: "Dec-2022",
          present_days: 20,
          overtime_hrs: 3,
        },
        {
          month_year: "Jan-2023",
          present_days: 22,
          overtime_hrs: 0,
        },
        {
          month_year: "Feb-2023",
          present_days: 24,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 8,
      name: "Rhona Davidson",
      image: "/images/8.jpg",
      base_salary: 327900,
      designation: "Full Stack developer",
      location: "Nashik",
      date_of_joining: "2023-02-27",
      bank_details: {
        acc_no: "099999999976",
        name: "SBI Bank",
        IFSC_code: "SBI0000999",
      },
      attendance: [
        {
          month_year: "Feb-2023",
          present_days: 23,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 9,
      name: "Colleen Hurst",
      image: "/images/9.jpg",
      base_salary: 205500,
      designation: "Data Scientist",
      location: "Nashik",
      date_of_joining: "2023-01-06",
      bank_details: {
        acc_no: "099999999989",
        name: "CBI Bank",
        IFSC_code: "CBI0000999",
      },
      attendance: [
        {
          month_year: "Jan-2023",
          present_days: 23,
          overtime_hrs: 0,
        },
        {
          month_year: "Feb-2023",
          present_days: 21,
          overtime_hrs: 0,
        },
      ],
    },
    {
      id: 10,
      name: "Sonya Frost",
      image: "/images/10.jpg",
      base_salary: 103600,
      designation: "Data analyst",
      location: "Pune ",
      date_of_joining: "2022-09-16",
      bank_details: {
        acc_no: "0999999999983",
        name: "CBI Bank",
        IFSC_code: "CBI0000999",
      },
      attendance: [
        {
          month_year: "Sep-2022",
          present_days: 23,
          overtime_hrs: 0,
        },
        {
          month_year: "Oct-2022",
          present_days: 21,
          overtime_hrs: 0,
        },
        {
          month_year: "Nov-2022",
          present_days: 20,
          overtime_hrs: 0,
        },
        {
          month_year: "Dec-2022",
          present_days: 25,
          overtime_hrs: 10,
        },
        {
          month_year: "Jan-2023",
          present_days: 22,
          overtime_hrs: 0,
        },
        {
          month_year: "Feb-2023",
          present_days: 24,
          overtime_hrs: 0,
        },
      ],
    },
  ],
};

const allEmployee = async (req, res) => {
  res.status(200).json(allEmployees);
  return;
};

router.get("/", allEmployee);

module.exports = router;
