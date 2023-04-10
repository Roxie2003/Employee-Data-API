const express = require("express");
const {
  getSalarySlips,
  createSalarySlip,
} = require("../controllers/salarySlipController");
const router = express.Router();

router.post("/:id/", createSalarySlip);
router.get("/:id/", getSalarySlips);

module.exports = router;
