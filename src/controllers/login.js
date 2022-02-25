const LoginService = require("../services/login");
const UserService = require("../services/user");

exports.login = async (req, res) => {
  const user = await UserService.authenticate(req.body);

  if (!user) {
    res.json({ error: "invalid credentials" });
    return;
  }

  const token = LoginService.generateJwt(user);

  return res.json({ token });
};
