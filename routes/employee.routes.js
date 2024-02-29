const EmployeeController = require("../controllers/employee.controller");
const express = require("express");
const router = express.Router();
const { validateEmployee } = require("../middlewares/employee.middleware");

router.get("/", EmployeeController.getEmployees);
router.get("/activated", EmployeeController.getActivatedEmployees);
router.get("/:id", EmployeeController.getEmployeeById);
router.post("/", validateEmployee, EmployeeController.saveEmployee);
router.delete("/:id", EmployeeController.deleteEmployee);
router.put("/:id", EmployeeController.editEmployee);
router.patch("/:id", EmployeeController.editEmployee);

module.exports = router;
