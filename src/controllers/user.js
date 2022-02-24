const User = require("../models/user");

exports.get = async (req, res) => {
	const users = await User.find()
	res.json(req.body)
}
