const UserService = require("../services/user");

exports.createUser = async (req, res) => {
  const [error, payload] = await UserService.createUser(req.body);

  if (error) return res.status(400).json({ error: payload });

  return res.status(201).send();
};

exports.getUsers = async (_req, res) => {
  const user = await UserService.getUsers();

  return res.json(user);
};
