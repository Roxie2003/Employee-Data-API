const express  = require("express")
const router = express.Router();

const employeeAttendance = {
    "testing api":true,
    "name": "employeeAttendance"
}

const employee = async (req, res) => {
    res.status(200).json( employeeAttendance );
    return;
}


router.get("/:id",employee)


module.exports = router