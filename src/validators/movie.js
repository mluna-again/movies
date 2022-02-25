const Joi = require("joi");

const movieSchema = Joi.object({
  movie: Joi.object({
    title: Joi.string().min(1).max(100).required().messages({
      "any.required": "movie's title required",
      "string.empty": "movie's title cannot be empty",
      "string.min": "movie's title must be at least 1 characters long",
      "string.max": "movie's title must be at most 100 characters long",
    }),
  })
    .required()
    .messages({
      "any.required": "movie required",
    }),
});

const validate = async (req, res, next) => {
  try {
    const value = await movieSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    req.body = value.movie;
    next();
  } catch (error) {
    res.json(error.details.map((error) => error.message));
  }
};

module.exports = validate;
