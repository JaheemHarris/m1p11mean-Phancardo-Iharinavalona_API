const mongoose = require("mongoose");
const { UserModel } = require("./user.model");
const ROLES = require("../enums/roles.enum");

const customerSchema = new mongoose.Schema({});

const CustomerModel = UserModel.discriminator(
	"Customer",
	customerSchema,
	ROLES.CUSTOMER
);
module.exports = { customerSchema, CustomerModel };
