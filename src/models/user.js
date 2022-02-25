const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { ROLES } = require("./role");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
		index: true,
		unique: true
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    enum: ROLES,
    default: ROLES[0],
  },
});

const SALT_WORK_FACTOR = 10;
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
  return await bcrypt.compare(data, this.password);
};

userSchema.index({ username: 1 })

module.exports = mongoose.model("User", userSchema);
