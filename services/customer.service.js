const { CustomerModel } = require("../models/customer.model");

const getCustomers = async () => {
	try {
		return await CustomerModel.find();
	} catch (error) {
		throw error;
	}
};

const saveCustomer = async (customer) => {
	try {
		return await CustomerModel.create(customer);
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getCustomers,
	saveCustomer,
};
