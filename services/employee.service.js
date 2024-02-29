const { EmployeeModel } = require("../models/employee.model");
const { GMAIL_EMAIL } = require("../config/email.config");
const EmailService = require("../lib/email");

const getEmployees = async () => {
	try {
		return await EmployeeModel.find();
	} catch (error) {
		throw error;
	}
};

const getActivatedEmployees = async () => {
	try {
		return await EmployeeModel.find({ isActivated: true });
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
		return await EmployeeModel.findByIdAndUpdate(id, newData, { new: true });
	} catch (error) {
		throw error;
	}
};

const deleteEmployee = async (id) => {
	try {
		const newData = { isActivated: false };
		return await EmployeeModel.findByIdAndUpdate(id, newData, { new: true });
	} catch (error) {
		throw error;
	}
};

const sendNewEmployeeEmail = async ({ employee, generatedPassword }) => {
	try {
		const emailOptions = {
			to: employee.email,
			from: GMAIL_EMAIL,
			subject: "Glamify Account",
			text: "Welcome to Glamify",
			html: `
				<h3>As a new <strong>employee</strong> of Glamify Account you have been created an account</h3>
				<p>With your email and this password : <strong>${generatedPassword}</strong>, you will be able to access the Glamify platform.</p>
				<p>We advise you to update it as soon as you access the platform</p>
			`,
		};
		return await EmailService.send(emailOptions);
	} catch (e) {
		throw e;
	}
};

module.exports = {
	getEmployees,
	saveEmployee,
	deleteEmployee,
	getEmployeeById,
	editEmployee,
	getActivatedEmployees,
	sendNewEmployeeEmail,
};
