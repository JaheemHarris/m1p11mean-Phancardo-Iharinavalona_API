require("dotenv").config();

const DB_NAME = process.env.DB_NAME;
const MONGODB_URL = process.env.MONGODB_URI;

console.log(MONGODB_URL)

module.exports = {
	DB_NAME,
	MONGODB_URL
};
