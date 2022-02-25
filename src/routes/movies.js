const express = require("express");
const router = express.Router();
// controllers
const movieController = require("../controllers/movie");

// validators
const movieValidator = require("../validators/movie");

// middleware
const verifyAdmin = require("../middleware/admin");

router.get("/", movieController.getAll);
router.post("/", verifyAdmin, movieValidator, movieController.create);
router.get("/:movieId", movieController.getById);
router.patch("/:movieId", verifyAdmin, movieValidator, movieController.update);
router.delete("/:movieId", verifyAdmin, movieController.deleteOne);

module.exports = router;
