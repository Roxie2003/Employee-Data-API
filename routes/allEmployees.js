const express = require("express");
const router = express.Router();

const allEmployees = {
  count: 12,
  previous: null,
  results: [
    {
      id: 1,
      url: "/api/employee/1/",
    },
    {
      id: 2,
      url: "/api/employee/2/",
    },
    {
      id: 3,
      url: "/api/employee/3/",
    },
    {
      id: 4,
      url: "/api/employee/4/",
    },
    {
      id: 5,
      url: "/api/employee/5/",
    },
    {
      id: 6,
      url: "/api/employee/6/",
    },
    {
      id: 7,
      url: "/api/employee/7/",
    },
    {
      id: 8,
      url: "/api/employee/8/",
    },
    {
      id: 9,
      url: "/api/employee/9/",
    },
    {
      id: 10,
      url: "/api/employee/10/",
    },
  ],
};

const allEmployee = async (req, res) => {
  res.status(200).json(allEmployees);
  return;
};

router.get("/", allEmployee);

module.exports = router;
