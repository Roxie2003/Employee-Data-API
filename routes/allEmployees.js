const express = require("express");
const router = express.Router();

const allEmployees = {
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

const allEmployee = async (req, res) => {
  res.status(200).json(allEmployees);
  return;
};

router.get("/", allEmployee);

module.exports = router;
