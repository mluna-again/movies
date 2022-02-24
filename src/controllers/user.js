const UserService = require("../services/user");

exports.createUser = async (req, res) => {

	const user = await UserService.createUser(req.body);

	return res.json(user)

}

exports.getUsers = async (_req, res) => {

	const user = await UserService.getUsers();

	return res.json(user)

}
