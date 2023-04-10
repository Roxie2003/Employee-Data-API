const SalarySlip = require("../models/SalarySlip");

const createSalarySlip = async (req, res) => {
  try {
    let newSalarySlip = new SalarySlip(req.body);
    await newSalarySlip.save();
    res.status(200).json({ data: newSalarySlip });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSalarySlips = async (req, res) => {
  try {
    const EmployeeId = req.params.id;
    console.log(EmployeeId);
    let SalarySlipsByEmpId = await SalarySlip.find({ employee_id: EmployeeId });
    res.status(200).json({ data: SalarySlipsByEmpId });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSalarySlipByMonthYear = async (req, res) => {
  try {
    const EmployeeId = req.params.id;
    console.log(EmployeeId);
    let SalarySlipsByEmpId = await SalarySlip.find({
      employee_id: EmployeeId,
      "attendance.0.month_year": req.params.month_year,
    });
    res.status(200).json({ data: SalarySlipsByEmpId });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = { createSalarySlip, getSalarySlips, getSalarySlipByMonthYear };
