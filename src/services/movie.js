const Movie = require("../models/movie");

exports.getAll = async (title) => {
  if (title) return exports.getByName(title);

  return await Movie.find({});
};

exports.getByName = async (name) => {
  return await Movie.findOne({ title: { $regex: name, $options: "i" } });
};

exports.getById = async (_id) => {
  return await Movie.findOne({ _id });
};

exports.create = async (movie) => {
  return await Movie.create(movie);
};

exports.update = async (movieId, updateObject) => {
  return await Movie.findOneAndUpdate({_id: movieId}, updateObject, { new: true });
};

exports.deleteOne = async (movieId) => {
	return await Movie.deleteOne({ _id: movieId });
};
