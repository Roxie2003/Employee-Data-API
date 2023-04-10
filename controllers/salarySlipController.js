const SalarySlip = require("../models/SalarySlip");

const createSalarySlip = async (req, res) => {
  try {
    const {
      name,
      designation,
      employee_id,
      location,
      date_of_joining,
      bank_details,
      attendance,
      total_salary,
    } = req.body;
    let newSalarySlip = new SalarySlip({
      name,
      designation,
      employee_id,
      location,
      date_of_joining,
      bank_details,
      attendance,
      total_salary,
    });
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

module.exports = { createSalarySlip, getSalarySlips };
