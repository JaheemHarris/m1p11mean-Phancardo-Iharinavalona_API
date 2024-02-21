const EmployeeModel = require("../services/employee.service");

const getEmployee = async (req, res) => {
	try {
		const employees = await EmployeeModel.getCustomers();
		res.json(employees);
	} catch (error) {
		res.status(400);
	}
};

const saveEmployee = async (req, res) => {
	try {
		const employee = await EmployeeModel.saveEmployee(req.body);
		res.status(201).json(employee);
	} catch (error) {
		res.status(400);
	}
};

module.exports = {
	getEmployee,
	saveEmployee,
};
