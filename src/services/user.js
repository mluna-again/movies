const User = require("../models/user");
const { ROLES } = require("../models/role");

exports.createUser = async (user) => {
  // assigns default role (ROLES[0] is "user")
  try {
    return [false, await User.create({ ...user, role: ROLES[0] })];
  } catch (error) {
    // 11000 -> duplicate index error code
    const errorMessage =
      error.code === 11000
        ? "user already exists"
        : "an error ocurred when creating user";
    return [true, errorMessage];
  }
};

exports.getUsers = async () => {
  return await User.find({});
};

exports.getUser = async (params) => {
  return await User.findOne(params);
};

exports.authenticate = async ({ username, password }) => {
  const user = await User.findOne({ username }).select("+password");
  if (!user) return false;

  const passwordsMatch = await user.validatePassword(password);

  const basicUser = {
    _id: user._id,
    username: user.username,
    role: user.role,
  };
  return passwordsMatch && basicUser;
};
