const Book = require("../models/book.js");


exports.createBook = async function (req, res) {
  const { title, genres, author } = req.body;
  try {
    const book = new Book({
      title: title,
      description: req.body.description,
      genres: genres,
      author: author,
    })
    await book.save();
    res.status(200).json({ status: "OK", data: book });
  } catch (err) {
    res.status(400).json({ status: "NOT OK!", error: err.message });
  }
};

exports.getBooks = async function (req, res) {
  try {
    const book = await Book.find();
    res.status(200).json({ status: "OK", data: book });
  } catch (err) {
    res.status(400).json({ status: "NOT OK!", error: err.message });
  }
};

exports.updateBook = async function (req, res) {
    try{
        const book = await Book.findById(req.params.id)
        const fields = Object.keys(req.body)
        fields.map(x => book[x] = req.body[x])
        await book.save();
        
        res.status(200).json({status: "OK", message: "You've successfully changed the book"})
    } catch (err) {
        res.status(400).json({status: "NOT OK!", error: err.message})

    }
}

exports.deleteBook = async function (req, res) {
    try{
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json({status: "OK", message: "Deleted"})
    } catch (err) {
        res.status(400).json({status: "NOT OK!", error: err.message})
    }
}