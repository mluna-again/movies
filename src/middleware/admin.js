const verifyAdmin = (req, res, next) => {
	if (req.user.role !== "admin") {
		res.status(403).send();
		return;
	}

	next();
};

module.exports = verifyAdmin;
