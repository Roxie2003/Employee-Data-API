const Employee = require("../models/Employee");

const createEmployee = async (req, res) => {
  try {
    const {
      name,
      image,
      base_salary,
      designation,
      location,
      date_of_joining,
      bank_details,
      attendance,
    } = req.body;
    let newEmployee = new Employee({
      name,
      image,
      base_salary,
      designation,
      location,
      date_of_joining,
      bank_details,
      attendance,
    });
    await newEmployee.save();
    res.status(200).json({ data: newEmployee });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllEmployees = async (req, res) => {
  try {
    let allEmployees = await Employee.find();
    res.status(200).json({ data: allEmployees });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSingleEmployee = async (req, res) => {
  try {
    const EmployeeId = req.params.id;
    let EmployeeById = await Employee.findOne({ _id: EmployeeId });
    res.status(200).json({ data: EmployeeById });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const EmployeeId = req.params.id;
    const {
      name,
      image,
      base_salary,
      designation,
      location,
      date_of_joining,
      bank_details,
      attendance,
    } = req.body;
    const EmployeeById = await Employee.findById(req.params.id);
    if (!EmployeeById) {
      req.status(400);
      throw new Error("Employee not found!");
    }

    if (EmployeeById) {
      let updatedEmployee = await Employee.findByIdAndUpdate(
        EmployeeId,
        {
          name,
          image,
          base_salary,
          designation,
          location,
          date_of_joining,
          bank_details,
          attendance,
        },
        { new: true }
      );

      res.status(200).json({ data: updatedEmployee });
      return;
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const EmployeeId = req.params.id;
    const EmployeeById = await Employee.findById(req.params.id);
    if (!EmployeeById) {
      req.status(400);
      throw new Error("Employee not found!");
    }
    if (EmployeeById) {
      await Employee.deleteOne({ _id: EmployeeId });
      res.status(200).json({ sucess: true });
      return;
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getSingleEmployee,
  updateEmployee,
  deleteEmployee,
};
