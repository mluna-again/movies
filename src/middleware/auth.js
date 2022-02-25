const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).send();

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
		console.log(error)
    if (error) return res.status(403).send();

    req.user = user;

    next();
  });
};

module.exports = authenticate;
