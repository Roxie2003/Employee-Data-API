const express = require("express");
const {
  getSalarySlips,
  createSalarySlip,
  getSalarySlipByMonthYear,
} = require("../controllers/salarySlipController");
const router = express.Router();

router.post("/:id/", createSalarySlip);
router.get("/:id/", getSalarySlips);
router.get("/:id/:month_year", getSalarySlipByMonthYear);

module.exports = router;
