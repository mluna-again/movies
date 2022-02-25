const MovieService = require("../services/movie");

exports.create = async (req, res) => {
  const movie = await MovieService.create(req.body);

  return res.status(201).json({ movie });
};

exports.getAll = async (req, res) => {
  const { name } = req.query;

  const movies = await MovieService.getAll(name);

  return res.json({ movies });
};

// exports.getOne = async (_req, res) => {
// 	return res.json({ movies });
// }
