const { createAPIResponse } = require("../lib/api");
const CustomerModel = require("../services/customer.service");

const getCustomers = async (req, res) => {
	try {
		const customers = await CustomerModel.getCustomers();
		res.json(customers);
	} catch (error) {
		res.status(400);
	}
};

const saveCustomer = async (req, res) => {
	try {
		const { id, firstname, lastname, email } = await CustomerModel.saveCustomer(
			req.body
		);
		res.status(201).json(
			createAPIResponse({
				status: 201,
				success: true,
				result: {
					customerId: id,
					firstname,
					lastname,
					email,
				},
			})
		);
	} catch (error) {
		res.status(400);
	}
};

module.exports = {
	getCustomers,
	saveCustomer,
};
