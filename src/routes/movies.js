const express = require('express')
const router = express.Router()
// controllers
const movieController = require("../controllers/movie");

// validators
const movieValidator = require("../validators/movie");

router.get("/", movieController.getAll);
router.post("/", movieValidator, movieController.create);

module.exports = router;
