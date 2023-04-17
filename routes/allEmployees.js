const express = require("express");

const {
  createEmployee,
  getAllEmployees,
  getSingleEmployee,
  getEmployeeByEmail,
  updateEmployee,
  deleteEmployee,
  loginEmployee,
} = require("../controllers/employeeController");
const router = express.Router();

router.post("/", createEmployee);
router.get("/", getAllEmployees);
router.get("/:id", getSingleEmployee);
router.get("/email/:email", getEmployeeByEmail);
router.patch("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
router.post("/login", loginEmployee);

module.exports = router;
