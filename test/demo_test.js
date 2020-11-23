const mocha = require("mocha");
const assert = require("assert");

// Describe what the test is going to do
describe("some demo test", function () {
  // Create tests using it blocks
  it("adds two numbers togather", function () {
    assert(3 + 2 === 5); //if the value is truthy the test will pass with a green V if not it will fail with an X
  });
});

// Run test with npm or yarn run test
