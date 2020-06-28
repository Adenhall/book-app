const Author = require("../models/author.js");

exports.getAuthor = async (req, res) => {
  const author = await Author.find()
  res.status(200).send({ status: "ok", data: author });
}

exports.createAuthor = async (req, res) => {
  const { name } = req.body;

  try {
    const author = await Author.create({ name: name });
    return res.status(201).json({ status: "OK", data: author });
  } catch (err) {
    return res.status(500).json({ status: "NOT OK!", error: err.message });
  }
};

exports.deleteAuthor = async function (req, res) {

  try {
    await Author.findByIdAndDelete(req.params.id);
    return res.status(201).json({ status: "OK", data: null, message: "You've successfully deleted an author" });
  } catch (err) {
    return res.status(400).json({ status: "NOT OK!", error: err.message });
  }
};
exports.updateAuthor = async function (req, res) {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    return res.status(201).json({ status: "OK", data: author });
  } catch (err) {
    return res.status(400).json({ status: "NOT OK!", error: err.message });
  }
};

