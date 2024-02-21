const mongoose = require("mongoose");
const { UserModel } = require("./user.model");
const ROLES = require("../enums/roles.enum");

const employeeSchema = new mongoose.Schema({

});

const EmployeeModel = UserModel.discriminator(
	"Employee",
	employeeSchema,
	ROLES.EMPLOYEE
);
module.exports = {employeeSchema,EmployeeModel};

