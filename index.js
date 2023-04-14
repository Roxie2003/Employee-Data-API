const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongooseConnection = require("./helpers/mongodb-connection");
const allEmployeeRoutes = require("./routes/allEmployees");
const allAdminRoutes = require("./routes/allAdmin");
const allSalarySlipRoutes = require("./routes/allSalarySlips");
const PORT = 8000;

mongooseConnection();
app.use(bodyParser.json());

const cors = require("cors");
const path = require("path");
const serveStatic = require("serve-static");

app.use(serveStatic(path.join(__dirname, "public-optimized")));
app.use(serveStatic(path.join(__dirname, "public")));
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/employees", allEmployeeRoutes);
app.use("/api/admin", allAdminRoutes);
app.use("/api/salarySlips", allSalarySlipRoutes);

app.get("/", (req, res) => {
  res.status(200).send("HELLO...");
});

app.use((err, req, res, next) => {
  //console.error(err.stack)
  res.status(500).json(err);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
