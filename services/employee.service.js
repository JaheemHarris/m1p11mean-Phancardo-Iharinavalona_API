const { EmployeeModel } = require("../models/employee.model");

const getEmployees = async () => {
	try {
		return await EmployeeModel.find({ isActivated: false });
	} catch (error) {
		throw error;
	}
};
const getEmployeeById = async (employeeId) => {
	try {
		return await EmployeeModel.findById(employeeId);
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

const editEmployee = async (id, newData) => {
	try {
		//desactivation d'user
		//const employee = EmployeeModel.findById(id);
		//const newData = { isActivated: false};
		return await EmployeeModel.findByIdAndUpdate(id, newData, { new: true });
	} catch (error) {
		throw error;
	}
};

const deleteEmployee = async (id) => {
	try {
		//desactivation d'user
		//const employee = EmployeeModel.findById(id);
		const newData = { isActivated: false };
		return await EmployeeModel.findByIdAndUpdate(id, newData, { new: true });
	} catch (error) {
		throw error;
	}
};

// const genereta = async (id) => {
// 	try {
// 		//desactivation d'user
//         //const employee = EmployeeModel.findById(id);
//         const newData = { isActivated: false};
// 		return await EmployeeModel.findByIdAndUpdate(id,newData,{new: true})
// 	} catch (error) {
// 		throw error;
// 	}
// };

module.exports = {
	getEmployees,
	saveEmployee,
	deleteEmployee,
	getEmployeeById,
	editEmployee,
};
