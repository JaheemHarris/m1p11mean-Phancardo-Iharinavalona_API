const ServiceModel = require("../models/service.model");

const getServices = async () => {
	try {
		return await ServiceModel.find()
	} catch (error) {
		throw error;
	}
};
const getServiceById = async (serviceId) => {
	try {
		return await ServiceModel.findById(serviceId)
	} catch (error) {
		throw error;
	}
};

const saveService = async (service) => {
	try {
		return await ServiceModel.create(service)
	} catch (error) {
		throw error;
	}
};

const editService = async (id, newData) => {
	try {
		//desactivation d'user
		//const service = ServiceModel.findById(id);
		//const newData = { isActivated: false};
		return await ServiceModel.findByIdAndUpdate(id, newData, { new: true });
	} catch (error) {
		throw error;
	}
};

const deleteService = async (id) => {
	try {
		//desactivation d'user
		//const service = ServiceModel.findById(id);
		const newData = { isActivated: false };
		return await ServiceModel.findByIdAndUpdate(id, newData, { new: true });
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getServices,
	saveService,
	deleteService,
	getServiceById,
	editService,
};
