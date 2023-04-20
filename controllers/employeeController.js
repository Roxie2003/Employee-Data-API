const Employee = require("../models/Employee");
const jwt = require('jsonwebtoken');

const createEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    let EmployeeByEmail = await Employee.findOne({ email });

    if (EmployeeByEmail) {
      res.status(200).json({ success: false, error: 'Account with this email already exist. Please Login' })
      return;
    }

    let newEmployee = new Employee({
      name,
      email,
      password,
    });
    await newEmployee.save();
    let token = jwt.sign({ email, name }, process.env.JWT_SECRET);
    res.status(200).json({ sucess: true, email: newEmployee.email, token });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const gauthCreateEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
    } = req.body;

    let EmployeeByEmail = await Employee.findOne({ email });

    if (EmployeeByEmail) {
      res.status(200).json({ success: false, error: 'Account with this email already exist. Please Login' })
      return;
    }

    let newEmployee = new Employee({
      name,
      email,
    });
    await newEmployee.save();
    let token = jwt.sign({ email, name }, process.env.JWT_SECRET);
    res.status(200).json({ sucess: true, email: newEmployee.email, token });
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

const getEmployeeByEmail = async (req, res) => {
  try {
    const EmployeeEmail = req.params.email;
    let EmployeeByEmail = await Employee.findOne({ email: EmployeeEmail });
    res.status(200).json({ data: EmployeeByEmail });
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
      email,
      password,
    } = req.body;
    const EmployeeById = await Employee.findById(req.params.id);
    if (!EmployeeById) {
      res.status(400);
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
          email,
          password,
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

const loginEmployee = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;
    let EmployeeByEmail = await Employee.findOne({ email });

    if (!EmployeeByEmail) {
      res.status(200).json({ success: false, error: 'Account not found Please Signup' })
      return;
    }

    if (EmployeeByEmail) {
      if (EmployeeByEmail.email === email && EmployeeByEmail.password === password) {
        let token = jwt.sign({ email }, process.env.JWT_SECRET);
        res.status(200).json({ sucess: true, token, email: EmployeeByEmail.email });
        return;
      }
      else {
        res.status(200).json({ success: false, error: 'Invalid Credentials' })
        return;
      }
    }

  } catch (error) {
    res.status(400).json(error.message);
  }
};

const gauthLoginEmployee = async (req, res) => {
  try {
    const {
      email,
    } = req.body;
    let EmployeeByEmail = await Employee.findOne({ email });

    if (!EmployeeByEmail) {
      res.status(200).json({ success: false, error: 'Account not found Please Signup' })
      return;
    }

    if (EmployeeByEmail) {
      let token = jwt.sign({ email }, process.env.JWT_SECRET);
      res.status(200).json({ sucess: true, token, email: EmployeeByEmail.email });
      return;
    }

  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createEmployee,
  gauthCreateEmployee,
  getAllEmployees,
  getSingleEmployee,
  getEmployeeByEmail,
  updateEmployee,
  deleteEmployee,
  loginEmployee,
  gauthLoginEmployee,
};
