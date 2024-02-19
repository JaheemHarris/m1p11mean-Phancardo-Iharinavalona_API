const mongoose = require("mongoose");
require();

const preferenceSchema = new mongoose.Schema({});

// ADD created_at and update_at fields
preferenceSchema.set("timestamps", true);
const PreferenceModel = mongoose.model("Customer", customerSchema);
module.exports = {
	preferenceSchema,
	PreferenceModel,
};
