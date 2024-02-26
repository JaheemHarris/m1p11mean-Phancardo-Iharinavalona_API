const createAPIResponse = ({
	status = 418,
	success = false,
	result = null,
	error = null,
	info = null,
}) => {
	return {
		status: status,
		success: success,
		result: result,
		error: error,
		info: info,
	};
};

module.exports = {
	createAPIResponse,
};
