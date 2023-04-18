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
    let SalarySlipsByEmpId = await SalarySlip.find();
    res.status(200).json({ data: SalarySlipsByEmpId });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSalarySlipByEmail = async (req, res) => {
  try {
    const EmployeeEmail = req.params.email;
    let SalarySlipByEmail = await Employee.findOne({ email: EmployeeEmail });
    res.status(200).json({ data: SalarySlipByEmail });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSalarySlipByMonthYear = async (req, res) => {
  try {
    const EmployeeId = req.params.id;
    let SalarySlipsByEmpId = await SalarySlip.findOne({
      employee_id: EmployeeId,
      "attendance.month_year": req.params.month_year,
    });
    res.status(200).json({ data: SalarySlipsByEmpId });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteSalarySlip = async (req, res) => {
  try {
    const SalarySlipId = req.params.salarySlipId;
    let SalarySlipById = await SalarySlip.findById(SalarySlipId);
    if (!SalarySlipById) {
      req.status(400);
      throw new Error("Salary Slip not found!");
    }
    if (SalarySlipById) {
      await SalarySlip.deleteOne({ _id: SalarySlipId });
      res.status(200).json({ success: true });
      return;
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createSalarySlip,
  getSalarySlips,
  getSalarySlipByEmail,
  getSalarySlipByMonthYear,
  deleteSalarySlip,
};
