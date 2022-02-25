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

exports.getById = async (req, res) => {
  const { movieId } = req.params;
  const [error, payload] = await MovieService.getById(movieId);

  if (error) return res.status(404).json({ error: payload });

  return res.json({ movie: payload });
};

// exports.getOne = async (_req, res) => {
// 	return res.json({ movies });
// }
