const express = require("express");
const router = express.Router();
// controllers
const userController = require("../controllers/user");

// validators
const userValidator = require("../validators/user");

router.get("/", userController.getUsers);
router.post("/", userValidator, userController.createUser);

module.exports = router;
