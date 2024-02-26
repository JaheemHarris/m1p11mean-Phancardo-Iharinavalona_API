const { createAPIResponse } = require("../lib/api");
const { passwordEncrypt, passwordVerify } = require("../lib/password-encrypt");
const { UserModel } = require("../models/user.model");
const { CustomerModel } = require("../models/customer.model");
const CustomerService = require("../services/customer.service");
const jwt = require("jsonwebtoken");
const {
	generateAccessTokenAsync,
	generateRefreshTokenAsync,
	verifyTokenAsync,
} = require("../lib/token");

const badCredentialsError = (res) => {
	res.status(200).json(
		createAPIResponse({
			status: 200,
			success: true,
			info: "User with these credentials doesn'exist",
		})
	);
};

const login = async (req, res) => {
	try {
		UserModel.findOne({ email: req.body.email }).then(async (user) => {
			if (user) {
				const { password } = req.body;
				passwordVerify(password, user.password).then(async (success) => {
					if (success) {
						const userPayload = {
							userId: user._id,
							firstname: user.firstname,
							lastname: user.lastname,
							email: user.email,
							role: user.role,
						};
						const accessToken = await generateAccessTokenAsync(userPayload);
						const refreshToken = await generateRefreshTokenAsync(userPayload);
						res.status(200).json(
							createAPIResponse({
								status: 200,
								success: true,
								result: {
									accessToken,
									refreshToken,
								},
							})
						);
					} else {
						badCredentialsError(res);
					}
				});
			} else {
				badCredentialsError(res);
			}
		});
	} catch (error) {
		res.status(400).json(
			createAPIResponse({
				status: 400,
				success: false,
				error: [
					{
						message: error.toString(),
					},
				],
			})
		);
	}
};

const register = async (req, res) => {
	try {
		UserModel.findOne({ email: req.body.email }).then(async (user) => {
			if (!user) {
				const password = req.body.password;
				const hashedPassword = await passwordEncrypt(password);
				const newUser = new CustomerModel({
					lastname: req.body.lastname,
					firstname: req.body.firstname,
					email: req.body.email,
					password: hashedPassword,
				});
				CustomerService.saveCustomer(newUser).then((createdUser) => {
					res
						.status(201)
						.json(createAPIResponse({ status: 201, success: true, result: createdUser }));
				});
			} else {
				res.status(400).json(
					createAPIResponse({
						status: 400,
						success: false,
						error: [
							{
								message: "User with this email alredy exists!",
							},
						],
					})
				);
			}
		});
	} catch (error) {
		res.status(400).json(
			createAPIResponse({
				status: 400,
				success: false,
				error: [
					{
						message: error.toString(),
					},
				],
			})
		);
	}
};

const refresh = async (req, res) => {
	try {
		const { accessToken, refreshToken } = req.body;
		const decodedRefresh = await verifyTokenAsync(refreshToken).catch((error) => {
			return res.status(401).json(
				createAPIResponse({
					status: 401,
					success: false,
					error: [
						{
							message: error.toString(),
						},
					],
				})
			);
		});
		const decodedAccess = jwt.decode(accessToken);

		if (decodedRefresh.email !== decodedAccess.email) {
			return res.status(403).json(
				createAPIResponse({
					status: 403,
					success: false,
					error: [
						{ message: "Access token and refresh token do not belong to the same user" },
					],
				})
			);
		}
		const newAccessToken = await generateAccessTokenAsync({
			username: decodedRefresh.username,
		});
		res.status(200).json(
			createAPIResponse({
				status: 200,
				success: true,
				result: { accessToken: newAccessToken, refreshToken: refreshToken },
			})
		);
	} catch (error) {
		return res.status(401).json(
			createAPIResponse({
				status: 401,
				success: false,
				error: [
					{
						message: error.toString(),
					},
				],
			})
		);
	}
};

module.exports = {
	login,
	register,
	refresh,
};
