const express = require('express')
const router = express.Router()

const userRouter = require("./users");
const loginRouter = require("./login");

router.use("/users", userRouter);
router.use("/login", loginRouter);

module.exports = router;
