const User = require("../models/user");

exports.createUser = async (req, res) => {
	const users = await User.find()
	res.json(req.body)
}
