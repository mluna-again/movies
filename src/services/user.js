const User = require("../models/user");
const { ROLES } = require("../models/role");

exports.createUser = async (user) => {
	// assigns default role (ROLES[0] is "admin")
	return await User.create({ ...user, role: ROLES[0] });
}

exports.getUsers = async () => {
	return await User.find({});
}
