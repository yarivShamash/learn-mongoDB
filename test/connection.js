const mongoose = require("mongoose");

// Connect to "testaroo" DB on mongoDB local server
mongoose.connect("mongodb://localhost/testaroo");

// Listen to "open" event once and lunch the callback
mongoose.connection
  .once("open", function () {
    console.log("Connection has been made! Now make fireworks");
  })
  .on("error", function (error) {
    console.log("Connection error", error);
  });
