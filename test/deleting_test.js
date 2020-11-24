const assert = require("assert");
const MarioCharacter = require("../models/mariocharacter");

describe("Deleting records", function () {
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

  it("Deletes one record in DB", function (done) {
    // Find and remove by name
    MarioCharacter.findOneAndRemove({ name: "Mario" }).then(function () {
      // After removing look for the removed document
      MarioCharacter.findOne({ name: "Mario" }).then(function (result) {
        // Expect it to return null
        assert(result === null);
        done();
      });
    });
  });
});
