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

exports.getById = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movie = await MovieService.getById(movieId);

    return res.json({ movie });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { movieId } = req.params;

    const movie = await MovieService.update(movieId, req.body);

    res.status(200).json({ movie });
  } catch (error) {
    next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const { movieId } = req.params;

    const movie = await MovieService.deleteOne(movieId);

    res.status(204).json({ movie });
  } catch (error) {
    next(error);
  }
};
