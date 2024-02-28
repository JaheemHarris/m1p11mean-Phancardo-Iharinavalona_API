const { createLogger, transports, format } = require("winston");

const logger = createLogger({
	level: "info",
	format: format.combine(
		format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Add timestamp with a custom format
		format.printf(({ level, message, timestamp }) => {
			return `${level}: ${timestamp} - ${message}`;
		})
	),
	transports: [
		new transports.Console({ level: "http" }),
		new transports.File({ filename: "error.log", level: "error" }),
		new transports.File({ filename: "info.log", level: "info" }),
		new transports.File({ filename: "combined.log" }),
	],
});

module.exports = logger;
