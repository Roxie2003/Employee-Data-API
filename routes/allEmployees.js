const express = require("express");

const {
  createEmployee,
  gauthCreateEmployee,
  getAllEmployees,
  getSingleEmployee,
  getEmployeeByEmail,
  updateEmployee,
  deleteEmployee,
  loginEmployee,
  gauthLoginEmployee,
} = require("../controllers/employeeController");
const router = express.Router();

router.post("/", createEmployee);
router.post("/gauth/", gauthCreateEmployee);
router.get("/", getAllEmployees);
router.get("/:id", getSingleEmployee);
router.get("/email/:email", getEmployeeByEmail);
router.patch("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
router.post("/login", loginEmployee);
router.post("/login/gauth/", gauthLoginEmployee);

module.exports = router;
