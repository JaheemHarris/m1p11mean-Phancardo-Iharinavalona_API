const { body, validationResult } = require("express-validator");
const { createAPIResponse } = require("../lib/api");

const validateUser = [
	body("firstname").notEmpty().withMessage("Firstname is required"),
	body("lastname").notEmpty().withMessage("Lastname is required"),
	body("email").isEmail().withMessage("Invalid email"),
	body("password").notEmpty().withMessage("Password is required"),
	(req, res, next) => {
		console.log(req.body);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res
				.status(400)
				.json(
					createAPIResponse({ status: 400, success: false, error: errors.array() })
				);
		}
		next();
	},
];

const validateCredentials = [
	body("email").isEmail().withMessage("Invalid email"),
	body("password").notEmpty().withMessage("Password is required"),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res
				.status(400)
				.json(
					createAPIResponse({ status: 400, success: false, error: errors.array() })
				);
		}
		next();
	},
];

const checkTokens = [
	body("accessToken").notEmpty().withMessage("Access token not provided!"),
	body("refreshToken").notEmpty().withMessage("Refresh token not provided!"),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res
				.status(400)
				.json(
					createAPIResponse({ status: 400, success: false, error: errors.array() })
				);
		}
		next();
	},
];

module.exports = {
	validateUser,
	validateCredentials,
	checkTokens,
};
