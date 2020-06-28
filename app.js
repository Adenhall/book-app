const express = require("express");
require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const Author = require("./src/models/author.js");
const {getAuthor, createAuthor, updateAuthor, deleteAuthor} = require('./src/controllers/AuthorController.js')
const {createGenre, deleteGenre, updateGenre, getGenres} = require('./src/controllers/GenreController.js')
const {createBook, getBooks, updateBook, deleteBook} = require('./src/controllers/BookController.js')

mongoose
  .connect(process.env.DB_LOCAL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database. Yay!"))
  .catch((err) => console.log(err.message));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route("/authors")
.post(createAuthor)
.get(getAuthor)

app.route("/authors/:id")
.put(updateAuthor)
.delete(deleteAuthor)

app.route("/genres")
.post(createGenre)
.get(getGenres)

app.route("/genres/:id")
.delete(deleteGenre)
.put(updateGenre)

app.route("/books")
.post(createBook)
.get(getBooks)

app.route("/books/:id")
.put(updateBook)
.delete(deleteBook)

app.listen(process.env.PORT, () => {
  console.log("App is running on", process.env.PORT);
});
