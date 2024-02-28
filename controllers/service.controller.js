const ServiceService = require("../services/service.service");


const getServices = async (req, res) => {
	try {
		const services = await ServiceService.getServices();
		res.json(services);
	} catch (error) {
		res.status(400);
	}
};
const getServiceById = async (req, res) => {
	try {
		const id = req.params.id;
		const services = await ServiceService.getServiceById(id);
		res.json(services);
	} catch (error) {
		res.status(400).json({
			error:true,
			message:"erreur de serveur"
		})
	console.log(error)
	}
};
const saveService = async (req, res) => {
	try {
		const service = await ServiceService.saveService(req.body);
		res.status(201).json(service);
	} catch (error) {
		res.status(400).json({
			error:true,
			message:"erreur de serveur ato"
		})
	console.log(error)
	}
};
const editService = async (req, res) => {
	try {
		const service = await ServiceService.editService(req.params.id, req.body);
		res.status(200).json(service);
	} catch (error) {
		res.status(400).json({
			error:true,
			message:"erreur de serveur"
		})
	console.log(error)
	}
};
const deleteService = async (req, res) => {
	try {
		const service = await ServiceService.deleteService(req.params.id);
		res.status(201).json(service);
	} catch (error) {
		res.status(400).json({
			error:true,
			message:"erreur de serveur"
		})
	console.log(error)
	}
};

module.exports = {
	getServices,
	saveService,
	getServiceById,
	deleteService,
	editService,
};
