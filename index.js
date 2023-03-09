const app = require("express")();
const PORT = 8080;
const allEmployeeRoutes = require("./routes/allEmployees");
const employeeRoutes = require("./routes/employee");
const attendanceRoutes = require("./routes/attendance");

app.use("/api/employees", allEmployeeRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/employee/attendance", attendanceRoutes);

app.get("/", (req, res) => {
  res.status(200).send("HELLO...");
});

app.listen(PORT, () => console.log(`Live on http://localhost:${PORT}`));
