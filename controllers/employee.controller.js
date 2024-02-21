const EmployeeService = require("../services/employee.service");

const getEmployees = async (req, res) => {
	try {
		const employees = await EmployeeService.getEmployees();
		res.json(employees);
	} catch (error) {
		res.status(400);
	}
};
const getEmployeeById = async (req, res) => {
	try {
        const id = req.params.id
		const employees = await EmployeeService.getEmployeeById(id);
		res.json(employees);
	} catch (error) {
		res.status(400);
	}
};
const saveEmployee = async (req, res) => {
	try {
		const employee = await EmployeeService.saveEmployee(req.body);
		res.status(201).json(employee);
	} catch (error) {
		res.status(400);
	}
};
const editEmployee = async (req, res) => {
	try {
		const employee = await EmployeeService.editEmployee(req.params.id,req.body)
		res.status(201).json(employee);
	} catch (error) {
		res.status(400);
	}
};
const deleteEmployee = async (req, res) => {
	try {
		const employee = await EmployeeService.deleteEmployee(req.params.id)
		res.status(201).json(employee);
	} catch (error) {
		res.status(400);
	}
};

module.exports = {
	getEmployees,
	saveEmployee,
    getEmployeeById,
    deleteEmployee,
    editEmployee,
};
