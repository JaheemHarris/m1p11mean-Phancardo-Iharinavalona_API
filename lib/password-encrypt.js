const RandExp = require("randexp");
const bcrypt = require("bcrypt");

const VALID_PASSWORD_REGEX = /^[a-zA-Z0-9!@#$%^&*()-_=+]{8}$/;

const generatePassword = () => {
	const generator = new RandExp(VALID_PASSWORD_REGEX);
	return generator.gen();
};

const passwordEncrypt = async (password) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		return hashedPassword;
	} catch (error) {
		throw new Error("Error encrypting password");
	}
};

const passwordVerify = async (password, hashedPassword) => {
	try {
		const result = await bcrypt.compare(password, hashedPassword);
		return result;
	} catch (error) {
		throw new Error("Error verifying password");
	}
};

module.exports = {
	VALID_PASSWORD_REGEX,
	generatePassword,
	passwordEncrypt,
	passwordVerify,
};
