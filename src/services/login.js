const jwt = require("jsonwebtoken");

const ONE_WEEK = "604800s";
exports.generateJwt = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: ONE_WEEK });
};
