const { DB_NAME, MONGODB_URL } = require("../config/database.config");
const logger = require("../lib/logger");
const mongoose = require("mongoose");
//console.log(MONGODB_URL)
const openDbConnection = async () => {
	try {

		await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`);
		logger.info(`Connection to Mongo DB database: ${DB_NAME} established`);
	} catch (error) {
		logger.error(`Failed to connect to Mongo DB database: ${DB_NAME}`);
		logger.error(`${error.toString()}`);
	} finally {
		logger.info(`Mongo DB URI: ${MONGODB_URL}/${DB_NAME}`);
	}
};

module.exports = {
	openDbConnection,
};
