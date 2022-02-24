const mongoose = require("mongoose");
const { ROLES } = require("./role");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	hashedPassword: {
		type: String,
		required: true,
		select: false
	},
	role: {
		type: String,
		enum: ROLES,
		default: ROLES[0]
	}
});

module.exports = mongoose.model("User", userSchema);
