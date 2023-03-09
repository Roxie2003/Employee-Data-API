const express  = require("express")
const router = express.Router();

const employeeDetails = {
    "testing api":true,
    "name": "employeeDetails"
}

const employee = async (req, res) => {
    res.status(200).json( employeeDetails );
    return;
}


router.get("/:id",employee)


module.exports = router