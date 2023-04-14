const Admin = require("../models/Admin");

const createAdmin = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;
    let newAdmin = new Admin({
      name,
      email,
      password,
    });
    await newAdmin.save();
    res.status(200).json({ data: newAdmin });
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
      res.status(400);
      throw new Error("Admin not found!");
    }

    if (AdminByEmail) {
      if(AdminByEmail.email === email && AdminByEmail.password === password ){
        res.status(200).json({ sucess: true });
        return;
      }
      else{
        res.status(200).json({ success: false, error: 'Invalid Credentials' })
        return;
      }
    }

  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
  loginAdmin,
};
