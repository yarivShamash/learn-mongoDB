const assert = require("assert");
const MarioCharacter = require("../models/mariocharacter");

describe("Updating records", function () {
  var character;
  beforeEach(function (done) {
    // create an new instanse of MariCharacter
    character = new MarioCharacter({
      name: "Mario",
      weight: 50,
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

  //   it("Increments weight by 1", function (done) {
  //     // Find by name and update
  //     // $inc means increment it takes an object with the property to increment and the amout to increment it by
  //     MarioCharacter.update({}, { $inc: { weight: 1 } }).then(function () {
  //       MarioCharacter.findOne({ name: "Mario" }).then(function (record) {
  //         assert(record.weight === 51);
  //         done();
  //       });
  //     });
  //   });
});
