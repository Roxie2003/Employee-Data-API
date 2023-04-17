const express = require("express");

const {
  createAdmin,
  getAllAdmins,
  getSingleAdmin,
  getAdminByEmail,
  updateAdmin,
  deleteAdmin,
  loginAdmin,
} = require("../controllers/adminController");
const router = express.Router();

router.post("/", createAdmin);
router.get("/", getAllAdmins);
router.get("/:id", getSingleAdmin);
router.get("/email/:email", getAdminByEmail);
router.patch("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);
router.post("/login", loginAdmin);

module.exports = router;
