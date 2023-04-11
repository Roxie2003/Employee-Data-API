const express = require("express");
const {
  getSalarySlips,
  createSalarySlip,
  getSalarySlipByMonthYear,
  deleteSalarySlip,
} = require("../controllers/salarySlipController");
const router = express.Router();

router.post("/:id/", createSalarySlip);
router.get("/", getSalarySlips);
router.get("/:id/:month_year", getSalarySlipByMonthYear);
router.delete("/:salarySlipId", deleteSalarySlip);
module.exports = router;
