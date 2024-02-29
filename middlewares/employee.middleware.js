const { body, validationResult } = require("express-validator");

const validateEmployee = [
	body("firstname").notEmpty().withMessage("Firstname is required"),
	body("lastname").notEmpty().withMessage("Lastname is required"),
	body("email").isEmail().withMessage("Invalid email"),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

module.exports = {
	validateEmployee,
};
