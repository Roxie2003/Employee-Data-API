const express = require("express");
const app = express();

const PORT = 3000;
const allEmployeeRoutes = require("./routes/allEmployees");
const employeeRoutes = require("./routes/employee");
const attendanceRoutes = require("./routes/attendance");
const cors = require("cors");
var path = require("path");
var serveStatic = require("serve-static");

app.use(serveStatic(path.join(__dirname, "public-optimized")));
app.use(serveStatic(path.join(__dirname, "public")));
app.use(cors());
app.use("/api/employees", allEmployeeRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/employee/attendance", attendanceRoutes);

app.get("/", (req, res) => {
  res.status(200).send("HELLO...");
});

app.listen(PORT, () => console.log(`Live on http://localhost:${PORT}`));
