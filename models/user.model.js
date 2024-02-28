const mongoose = require("mongoose");

const options = { discriminatorKey: "role" };
const userSchema = new mongoose.Schema(
	{
		lastname: {
			type: String,
			required: true,
		},
		firstname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isActivated: {
			type: Boolean,
			default: true,
		},
	},
	options
);

// ADD created_at and update_at fields
userSchema.set("timestamps", true);
const UserModel = mongoose.model("User", userSchema);
module.exports = { userSchema, UserModel };
