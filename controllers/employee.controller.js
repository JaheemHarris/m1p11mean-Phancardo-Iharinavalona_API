const EmployeeService = require("../services/employee.service");
const { createAPIResponse } = require("../lib/api");
const { EmployeeModel } = require("../models/employee.model");
const {
	generatePassword,
	passwordEncrypt,
} = require("../lib/password-encrypt");
const { UserModel } = require("../models/user.model");

const getEmployees = async (req, res) => {
	try {
		const employees = await EmployeeService.getEmployees();
		res.json(employees);
	} catch (error) {
		res.status(400);
	}
};

const getActivatedEmployees = async (req, res) => {
	try {
		const employees = await EmployeeService.getEmployees();
		res
			.status(200)
			.json(createAPIResponse({ status: 200, success: true, result: employees }));
	} catch (error) {
		res.status(500).json(
			createAPIResponse({
				status: 500,
				success: false,
				error: [
					{
						message: error.toString(),
					},
				],
			})
		);
	}
};

const getEmployeeById = async (req, res) => {
	try {
		const id = req.params.id;
		const employee = await EmployeeService.getEmployeeById(id);
		res.status(200).json(
			createAPIResponse({
				status: 200,
				success: true,
				result: employee,
			})
		);
	} catch (error) {
		res.status(500).json(
			createAPIResponse({
				status: 500,
				success: false,
				error: [{ message: error.toString() }],
			})
		);
	}
};

const saveEmployee = async (req, res) => {
	try {
		UserModel.findOne({ email: req.body.email }).then(async (user) => {
			if (!user) {
				const password = generatePassword();
				const hashedPassword = await passwordEncrypt(password);
				const newEmployee = new EmployeeModel({
					lastname: req.body.lastname,
					firstname: req.body.firstname,
					email: req.body.email,
					password: hashedPassword,
				});
				EmployeeService.saveEmployee(newEmployee).then((createdEmployee) => {
					EmployeeService.sendNewEmployeeEmail({
						employee: createdEmployee,
						generatedPassword: password,
					});
					res
						.status(201)
						.json(
							createAPIResponse({ status: 201, success: true, result: createdEmployee })
						);
				});
			} else {
				res.status(200).json(
					createAPIResponse({
						status: 200,
						success: false,
						error: [
							{
								message: "User with this email alredy exists!",
							},
						],
					})
				);
			}
		});
	} catch (error) {
		res.status(500).json(
			createAPIResponse({
				status: 500,
				success: false,
				error: [
					{
						message: error.toString(),
					},
				],
			})
		);
	}
};

const editEmployee = async (req, res) => {
	try {
		const employee = await EmployeeService.editEmployee(req.params.id, req.body);
		res.status(200).json(employee);
	} catch (error) {
		res.status(400).json({
			error: true,
			message: "erreur de serveur",
		});
		console.log(error);
	}
};

const deleteEmployee = async (req, res) => {
	try {
		const employee = await EmployeeService.deleteEmployee(req.params.id);
		res
			.status(200)
			.json(createAPIResponse({ status: 200, success: true, result: employee }));
	} catch (error) {
		res.status(500).json(
			createAPIResponse({
				status: 500,
				success: false,
				error: [
					{
						message: error.toString(),
					},
				],
			})
		);
	}
};

module.exports = {
	getEmployees,
	saveEmployee,
	getEmployeeById,
	deleteEmployee,
	editEmployee,
	getActivatedEmployees,
};
