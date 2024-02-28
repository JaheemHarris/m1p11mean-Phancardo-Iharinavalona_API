const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({});

// ADD created_at and update_at fields
scheduleSchema.set("timestamps", true);
const ScheduleModel = mongoose.model("Schedule", scheduleSchema);
module.exports = {
	ScheduleModel,
	scheduleSchema,
};
