const mongoose = require("mongoose");
const { UserModel } = require("./user.model");
const ROLES = require("../enums/roles.enum");

const managerSchema = new mongoose.Schema({});

const ManagerModel = UserModel.discriminator(
	"Manager",
	managerSchema,
	ROLES.CUSTOMER
);
module.exports = ManagerModel;
