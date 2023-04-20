const Admin = require("../models/Admin");
const jwt = require('jsonwebtoken');

const createAdmin = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    let AdminByEmail = await Admin.findOne({ email });

    if (AdminByEmail) {
      res.status(200).json({ success: false, error: 'Account with this email already exist. Please Login' })
      return;
    }

    let newAdmin = new Admin({
      name,
      email,
      password,
    });
    await newAdmin.save();
    let token = jwt.sign({ email, name }, process.env.JWT_SECRET);
    res.status(200).json({ success: true, email: newAdmin.email, token });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllAdmins = async (req, res) => {
  try {
    let allAdmins = await Admin.find();
    res.status(200).json({ data: allAdmins });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getSingleAdmin = async (req, res) => {
  try {
    const AdminId = req.params.id;
    let AdminById = await Admin.findOne({ _id: AdminId });
    res.status(200).json({ data: AdminById });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAdminByEmail = async (req, res) => {
  try {
    const AdminEmail = req.params.email;
    let AdminByEmail = await Admin.findOne({ email: AdminEmail });
    res.status(200).json({ data: AdminByEmail });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateAdmin = async (req, res) => {
  try {
    const AdminId = req.params.id;
    const {
      name,
      email,
      password,
    } = req.body;
    const AdminById = await Admin.findById(req.params.id);
    if (!AdminById) {
      res.status(400);
      throw new Error("Admin not found!");
    }

    if (AdminById) {
      let updatedAdmin = await Admin.findByIdAndUpdate(
        AdminId,
        {
          name,
          email,
          password,
        },
        { new: true }
      );

      res.status(200).json({ data: updatedAdmin });
      return;
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const AdminId = req.params.id;
    const AdminById = await Admin.findById(req.params.id);
    if (!AdminById) {
      req.status(400);
      throw new Error("Admin not found!");
    }
    if (AdminById) {
      await Admin.deleteOne({ _id: AdminId });
      res.status(200).json({ sucess: true });
      return;
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const loginAdmin = async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;
    let AdminByEmail = await Admin.findOne({ email });

    if (!AdminByEmail) {
      res.status(200).json({ success: false, error: 'Account not found Please Signup' })
      return;
    }

    if (AdminByEmail) {
      if (AdminByEmail.email === email && AdminByEmail.password === password) {
        let token = jwt.sign({ email }, process.env.JWT_SECRET);
        res.status(200).json({ sucess: true, token, email: AdminByEmail.email });
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

const gauthLoginAdmin = async (req, res) => {
  try {
    const {
      email,
    } = req.body;
    let AdminByEmail = await Admin.findOne({ email });

    if (!AdminByEmail) {
      res.status(200).json({ success: false, error: 'Account not found Please Signup' })
      return;
    }

    if (AdminByEmail) {
      let token = jwt.sign({ email }, process.env.JWT_SECRET);
      res.status(200).json({ sucess: true, token, email: AdminByEmail.email });
      return;
    }

  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getSingleAdmin,
  getAdminByEmail,
  updateAdmin,
  deleteAdmin,
  loginAdmin,
  gauthLoginAdmin,
};
