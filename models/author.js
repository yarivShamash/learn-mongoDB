const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema for the books that are nested in the AuthorSchema also called sub documents
const BookSchema = new Schema({
  title: String,
  pages: Number,
});

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema], // This means books is an array of Book Objects
});

const Author = mongoose.model("author", AuthorSchema);

module.exports = Author;
