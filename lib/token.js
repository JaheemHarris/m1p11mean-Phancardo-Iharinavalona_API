const jwt = require("jsonwebtoken");
const {
	SECRET,
	REFRESH_TOKEN_EXP,
	ACCESS_TOKEN_EXP,
} = require("../config/token.config");

const generateAccessToken = (payload) => {
	return jwt.sign(payload, SECRET, {
		expiresIn: ACCESS_TOKEN_EXP,
	});
};

const generateAccessTokenAsync = (payload) => {
	return new Promise((resolve, reject) => {
		jwt.sign(
			payload,
			SECRET,
			{
				expiresIn: ACCESS_TOKEN_EXP,
			},
			(err, token) => {
				if (err) {
					reject(err);
				} else {
					resolve(token);
				}
			}
		);
	});
};

const generateRefreshToken = (payload) => {
	return jwt.sign(payload, SECRET, {
		expiresIn: REFRESH_TOKEN_EXP,
	});
};

const generateRefreshTokenAsync = (payload) => {
	return new Promise((resolve, reject) => {
		jwt.sign(
			payload,
			SECRET,
			{
				expiresIn: REFRESH_TOKEN_EXP,
			},
			(err, token) => {
				if (err) {
					reject(err);
				} else {
					resolve(token);
				}
			}
		);
	});
};

const verifyToken = (token) => {
	return jwt.verify(token, SECRET);
};

const verifyTokenAsync = (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, SECRET, (err, decoded) => {
			if (err) {
				reject(err);
			} else {
				resolve(decoded);
			}
		});
	});
};

module.exports = {
	generateAccessToken,
	generateAccessTokenAsync,
	generateRefreshToken,
	generateRefreshTokenAsync,
	verifyToken,
	verifyTokenAsync,
};
