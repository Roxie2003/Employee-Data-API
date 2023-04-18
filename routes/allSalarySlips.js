const express = require("express");
const {
  getSalarySlips,
  createSalarySlip,
  getSalarySlipByEmail,
  getSalarySlipByMonthYear,
  updateSalarySlip,
  deleteSalarySlip,
} = require("../controllers/salarySlipController");
const router = express.Router();

router.post("/:id/", createSalarySlip);
router.get("/", getSalarySlips);
router.get("/email/:email", getSalarySlipByEmail);
router.get("/:id/:month_year", getSalarySlipByMonthYear);
router.patch("/:id/", updateSalarySlip);
router.delete("/:salarySlipId", deleteSalarySlip);
module.exports = router;
