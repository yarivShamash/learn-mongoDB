const assert = require("assert");
const MarioCharacter = require("../models/mariocharacter");

describe("Finding records", function () {
  var character;
  beforeEach(function (done) {
    // create an new instanse of MariCharacter
    character = new MarioCharacter({
      name: "Mario",
    });

    character.save().then(function () {
      done();
    });
  });

  it("Finds one record by name in DB", function (done) {
    MarioCharacter.findOne({
      name: "Mario",
    }).then(function (result) {
      //   console.log("result", result);
      assert(result.name === "Mario");
      done();
    });
  });
  it("Finds one record by ObjectId in DB", function (done) {
    MarioCharacter.findOne({
      _id: character._id,
    }).then(function (result) {
      //   console.log("result", result);
      // assert(result._id === character._id); //NOTE, this will fail becaude the _id is not a string but an Object use .toString() as below
      assert(result._id.toString() === character._id.toString());
      done();
    });
  });
});
