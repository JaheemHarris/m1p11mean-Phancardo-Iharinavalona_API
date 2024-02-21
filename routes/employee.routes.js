const EmployeeController = require("../controllers/employee.controller");
const express = require("express");
const router = express.Router();
const { validateUser } = require("../middlewares/customer.middleware");

router.get("/", EmployeeController.getEmployee);
router.post("/", validateUser, EmployeeController.saveEmployee);

module.exports = router;
