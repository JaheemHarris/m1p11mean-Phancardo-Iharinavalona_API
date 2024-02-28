const mongoose = require("mongoose");
const serviceSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
		required: true
	},
	duration: {
		type: Number,
		required: true,
	},
	commission: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		required: false,
	},
	endDate: {
		type: Date,
		required: true,
	},
	isActivated: {
		type: Boolean,
		default: true,
	 }
});

// ADD created_at and update_at fields
serviceSchema.set("timestamps", true);
const serviceModel = mongoose.model("Service", serviceSchema);

module.exports = serviceModel

