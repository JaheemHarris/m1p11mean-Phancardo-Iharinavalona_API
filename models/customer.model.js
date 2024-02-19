const mongoose = require("mongoose");
const { UserModel } = require("./user.model");
const ROLES = require("../enums/roles.enum");
const { preferenceSchema } = require("./preference.model");

const customerSchema = new mongoose.Schema({
	preference: {
		type: preferenceSchema,
		required: false,
	},
});

const CustomerModel = UserModel.discriminator(
	"Customer",
	customerSchema,
	ROLES.CUSTOMER
);
module.exports = CustomerModel;
