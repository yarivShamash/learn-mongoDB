const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

describe("Nesting records", function () {
  beforeEach(function (done) {
    mongoose.connection.collections.authors.drop(function () {
      done();
    });
  });
  //   it("Creates an authour with sub-documents", function (done) {
  //     var pat = new Author({
  //       name: "Patrick the star fish",
  //       books: [
  //         {
  //           title: "Spongebob my nighbour",
  //           pages: 5,
  //         },
  //       ],
  //     });
  //     pat.save().then(function () {
  //       Author.findOne({ name: "Patrick the start fish" }).then(function (
  //         record
  //       ) {
  //         assert(record.books.length === 1);
  //         done();
  //       });
  //     });
  //   });

  //   it("Adds a book to an authour", function (done) {
  //     var pat = new Author({
  //       name: "Patrick the star fish",
  //       books: [
  //         {
  //           title: "Spongebob my nighbour",
  //           pages: 5,
  //         },
  //       ],
  //     });
  //     pat.save().then(function () {
  //       Author.findOne({ name: "Patrick the start fish" }).then(function (
  //         record
  //       ) {
  //         record.books.push({ title: "Happy Joyjoy", pages: 10 });
  //         record
  //           .save()
  //           .then(function () {
  //             Author.findOne({ name: "Patrick the star fish" });
  //           })
  //           .then(function (result) {
  //             assert(result.books.length === 2);
  //             done();
  //           });
  //       });
  //     });
  //   });
});
