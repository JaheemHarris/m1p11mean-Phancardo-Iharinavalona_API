const EmployeeService = require("../services/employee.service");
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');

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
		const id = req.params.id;
		const employees = await EmployeeService.getEmployeeById(id);
		res.json(employees);
	} catch (error) {
		res.status(400);
	}
};
const saveEmployee = async (req, res) => {
	try {
		const password = Math.random().toString(36).slice(-8);
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		req.body.password = hashedPassword;
		
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.NODEMAILER_USERNAME,
				pass:  process.env.NODEMAILER_PASSWORD,
			},
		});

		const mailOptions = {
			from: process.env.NODEMAILER_USERNAME,
			to: req.body.email,
			subject: "Compte employé Glamify",
			text: "Voici votre compte : Username " + req.body.email + ", Password:" + password,
		};

		console.log(mailOptions)

		// Sending the email
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.error("Error occurred:", error.message);
			} else {
				console.log("Email send successfully!");
				console.log("Message ID:", info.messageId);
			}
		});
		//console.log(req.body)
		const employee = await EmployeeService.saveEmployee(req.body);
		res.status(201).json(employee);
	} catch (error) {
		res.status(400).json({
			error:true,
			message:"erreur de serveur"
		})
		console.log(error)
	}
};
const editEmployee = async (req, res) => {
	try {
		const employee = await EmployeeService.editEmployee(req.params.id, req.body);
		res.status(200).json(employee);
	} catch (error) {
			res.status(400).json({
			error:true,
			message:"erreur de serveur"
		})
	console.log(error)
	}
};
const deleteEmployee = async (req, res) => {
	try {
		const employee = await EmployeeService.deleteEmployee(req.params.id);
		res.status(201).json(employee);
	} catch (error) {
		res.status(400).json({
			error:true,
			message:"erreur de serveur"
		})
		console.log(error)
	}
};

module.exports = {
	getEmployees,
	saveEmployee,
	getEmployeeById,
	deleteEmployee,
	editEmployee,
};
