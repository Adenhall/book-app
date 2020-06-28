const Genre = require("../models/genres.js");

exports.createGenre = async (req, res) => {
  try {
    const genre = await Genre.create({ name: req.body.name });
    res.status(201).json({ status: "OK", data: genre });
  } catch (err) {
    res.status(400).json({ status: "NOT OK!", error: err.message });
  }
};

exports.updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    res.status(201).json({ status: "OK", data: genre });
  } catch (err) {
    res.status(400).json({ status: "NOT OK!", error: err.message });
  }
};

exports.deleteGenre = async (req, res) => {
    try {
        await Genre.findByIdAndDelete(req.params.id)
        res.status(200).json({status: "OK", data: null, message: "You've succesfully deleted a genre"})
    } catch (err) {
        res.status(400).json({status:"NOT OK!", error: err.message})
    }
};

exports.getGenres = async (req, res) => {
    try {
        const genre = await Genre.find();
        res.status(200).json({status: "OK", data: genre})
    } catch (err) {
        res.status(400).json({status: "NOT OK!", error: err.message})
    }
}