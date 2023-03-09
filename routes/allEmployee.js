const express  = require("express")
const router = express.Router();

const allEmployees = {
    "testing api":true,
    "name": "allEmployees"
}

const allEmployee = async (req, res) => {
    res.status(200).json( allEmployees );
    return;
}


router.get("/", allEmployee)


module.exports = router