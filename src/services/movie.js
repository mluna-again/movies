const Movie = require("../models/movie");

exports.getAll = async (title) => {
  if (title) return exports.getByName(title);

  return await Movie.find({});
};

exports.getByName = async (name) => {
  return await Movie.findOne({ title: { $regex: name, $options: "i" } });
};

exports.getById = async (_id) => {
  try {
    return [false, await Movie.findOne({ _id })];
  } catch (_error) {
    return [true, "movie not found"];
  }
};

exports.create = async (movie) => {
  return await Movie.create(movie);
};
