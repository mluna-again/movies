const jwt = require("jsonwebtoken");

exports.generateJwt = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET);
};
