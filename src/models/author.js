const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author is required"],
        trim: true
    }
})

const Author = mongoose.model("Author", authorSchema)

module.exports = Author