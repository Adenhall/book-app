const mongoose = require('mongoose');
const Author = require("../models/author.js");
const Genre = require("../models/genres.js");

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true,"Book must have a title"],
        trim: true,
        unique: true
    },
    description: {
        type: String,
        trim: true
    },
    genres: Array,
    author: Object
})

bookSchema.pre("save", async function (next) {
    this.author = await Author.findById(this.author);
    const genreArray = this.genres.map(async (x) => await Genre.findById(x));
    this.genres = await Promise.all(genreArray);
    next();
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book