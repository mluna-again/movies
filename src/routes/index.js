const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");

const userRouter = require("./users");
const loginRouter = require("./login");
const moviesRouter = require("./movies");

router.use("/users", userRouter);
router.use("/login", loginRouter);
router.use("/movies", authMiddleware, moviesRouter);

module.exports = router;
