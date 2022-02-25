const Joi = require("joi");

const loginSchema = Joi.object({
  user: Joi.object({
    username: Joi.string()
      .min(4)
      .max(20)
      .pattern(/^[a-z0-9_]*$/i)
      .required()
      .messages({
        "any.required": "username required",
        "string.empty": "username cannot be empty",
        "string.min": "username must be at least 4 characters long",
        "string.max": "username must be at most 20 characters long",
        "string.pattern.base":
          "username can only contain letters, numbers or underscores",
      }),
    password: Joi.string().min(8).max(100).required().messages({
      "any.required": "password required",
      "string.empty": "password cannot be empty",
      "string.min": "password must be at least 8 characters long",
      "string.max": "password must be at most 100 characters long",
    }),
  })
    .required()
    .messages({
      "any.required": "user required",
      "object.base": "user must be an object",
    }),
});

const validate = async (req, res, next) => {
  try {
    const value = await loginSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    req.body = value.user;
    next();
  } catch (error) {
    res.json(error.details.map((error) => error.message));
  }
};

module.exports = validate;
