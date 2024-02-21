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
		console.log(req.body)
		const customers = await CustomerModel.saveCustomer(req.body);
		res.status(201).json(customers);
	} catch (error) {
		res.status(400);
	}
};

module.exports = {
	getCustomers,
	saveCustomer,
};
