const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;
const allEmployeeRoutes = require("./routes/allEmployees");
const employeeRoutes = require("./routes/employee");
const attendanceRoutes = require("./routes/attendance");
var path = require("path");

app.use(express.static("public"));
app.use("/images", express.static("images"));
app.use(cors());
app.use("/api/employees", allEmployeeRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/employee/attendance", attendanceRoutes);

app.get("/", (req, res) => {
  res.status(200).send("HELLO...");
});

app.listen(PORT, () => console.log(`Live on http://localhost:${PORT}`));
