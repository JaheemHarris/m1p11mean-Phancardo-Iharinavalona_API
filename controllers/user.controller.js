const UserService = require("../services/user.service");

const getUsers = async (req, res) => {
	try {
		const users = await UserService.getUsers();
		res.json(users);
	} catch (error) {
		res.status(400);
	}
};

module.exports = {
	getUsers,
};
