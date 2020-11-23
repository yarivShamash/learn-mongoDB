const mocha = require("mocha");
const assert = require("assert");
const MarioCharacter = require("../models/mariocharacter");

// Describe what the test is going to do
describe("Saving records", function () {
  //
  // Create tests using it blocks
  it("Saves records to DB", function (done) {
    // create an new instanse of MariCharacter
    var character = new MarioCharacter({
      name: "Mario",
    });

    character.save().then(function () {
      assert(character.isNew === false); // using the isNew method we can test whether something is saved to DB. Returns true when the variable is new to the DB meaning it has not been saved. Therefore we are looking for the false value meaning it is already in DB
      done(); // Current test is done mocha can move to the next test
    }); // .save() Save the record to the DB in the mariocharacter collection as describes in ../models/mariocharacter
  });
});

// Run test with npm or yarn run test
