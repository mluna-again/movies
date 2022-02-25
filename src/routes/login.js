const express = require('express')
const router = express.Router()
// controllers
const loginController = require("../controllers/login");

// validators
const loginValidator = require("../validators/login");

router.post("/", loginValidator, loginController.login);

module.exports = router;
