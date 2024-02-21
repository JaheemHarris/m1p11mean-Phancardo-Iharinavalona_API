const { UserModel } = require("../models/user.model");

const getUsers = async () => {
	try {
		return await UserModel.find();
	} catch (error) {
		throw error;
	}
};



module.exports = {
	getUsers,
	

};
