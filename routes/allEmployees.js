const express = require("express");

const {
  createEmployee,
  getAllEmployees,
  getSingleEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");
const router = express.Router();

router.post("/", createEmployee);
router.get("/", getAllEmployees);
router.get("/:id", getSingleEmployee);
router.patch("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
