const { body, validationResult } = require("express-validator");

const validateService = [
	body("name").notEmpty().withMessage("name is required"),
	body("price").notEmpty().withMessage("price is required"),
	body("duration").notEmpty().withMessage("duration is required"),
	body("commission").notEmpty().withMessage("commission is required"),
	body("endDate").notEmpty().withMessage("enDate is required"),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];

module.exports = {
	validateService,
};
