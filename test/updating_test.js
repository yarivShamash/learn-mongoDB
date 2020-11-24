const assert = require("assert");
const MarioCharacter = require("../models/mariocharacter");

describe("Updating records", function () {
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

  it("Updates one record in DB", function (done) {
    // Find by name and update
    MarioCharacter.findOneAndUpdate({ name: "Mario" }, { name: "Luigi" }).then(
      function () {
        // Then search by _id
        MarioCharacter.findOne({ _id: character._id }).then(function (result) {
          // Them assert the result
          assert(result.name === "Luigi");
          done();
        });
      }
    );
  });
});
