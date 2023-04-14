const express = require("express");

const {
  createAdmin,
  getAllAdmins,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
  loginAdmin,
} = require("../controllers/adminController");
const router = express.Router();

router.post("/", createAdmin);
router.get("/", getAllAdmins);
router.get("/:id", getSingleAdmin);
router.patch("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);
router.post("/login", loginAdmin);

module.exports = router;
