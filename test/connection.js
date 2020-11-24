const mongoose = require("mongoose");

// Replace mongoose deprecated Promise with ES6 Promises
mongoose.Promise = global.Promise;

// Connect to DB before running tests
before(function (done) {
  // Connect to "testaroo" DB on mongoDB local server
  mongoose.connect("mongodb://localhost/testaroo");

  // Listen to "open" event once and lunch the callback
  mongoose.connection
    .once("open", function () {
      console.log("Connection has been made! Now make fireworks");
      done(); // Call done() once connection has been established
    })
    .on("error", function (error) {
      console.log("Connection error", error);
    });
});

// Drop the characters collection before each test
beforeEach(function (done) {
  // Drop the cllection
  mongoose.connection.collections.mariocharacters.drop(function () {
    // Once the collection dropped the test can run
    done();
  });
});
