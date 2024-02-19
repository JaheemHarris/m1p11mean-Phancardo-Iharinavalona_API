const mongoose = require("mongoose");

const options = { discriminatorKey: "role" };
const userSchema = new mongoose.Schema(
	{
		lastname: String,
		firstname: String,
		email: String,
		password: String,
		isActivated: Boolean,
	},
	options
);

// ADD created_at and update_at fields
userSchema.set("timestamps", true);
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
