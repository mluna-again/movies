const express = require('express')
const router = express.Router()
// controllers
const movieController = require("../controllers/movie");

// validators
const movieValidator = require("../validators/movie");

// middleware
const verifyAdmin = require("../middleware/admin");

router.get("/", movieController.getAll);
router.post("/", verifyAdmin, movieValidator, movieController.create);
router.get("/:movieId", movieController.getById);

module.exports = router;
