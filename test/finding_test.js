const assert = require("assert");
const MarioCharacter = require("../models/mariocharacter");

describe("finding records", function () {
  beforeEach(function (done) {
    // create an new instanse of MariCharacter
    var character = new MarioCharacter({
      name: "Mario",
    });

    character.save().then(function () {
      done();
    });
  });
  it("finds one record in DB", function (done) {
    MarioCharacter.findOne({
      name: "Mario",
    }).then(function (result) {
      //   console.log("result", result);
      assert(result.name === "Mario");
      done();
    });
  });
});
