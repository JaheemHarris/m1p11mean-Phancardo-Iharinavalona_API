const { EmployeeModel } = require("../models/employee.model");
const { UserModel } = require("../models/user.model");

const getEmployee = async () => {
	try {
		return await EmployeeModel.find();
	} catch (error) {
		throw error;
	}
};

const saveEmployee = async (employee) => {
	try {
		return await EmployeeModel.create(employee);
	} catch (error) {
		throw error;
	}
};

const deleteEmployee = async (employee) => {
	try {
        //desactivation d'user
		return await EmployeeModel.desactivation(employee);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getEmployee,
    saveEmployee,
    deleteEmployee,
};
