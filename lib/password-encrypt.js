const RandExp = require("randexp");

const VALID_PASSWORD_REGEX = /^[a-zA-Z0-9!@#$%^&*()-_=+]{8}$/;

const generatePassword = () => {
	const generator = new RandExp(VALID_PASSWORD_REGEX);
	return generator.gen();
};

module.exports = {
	VALID_PASSWORD_REGEX,
	generatePassword,
};
