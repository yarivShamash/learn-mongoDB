const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema for models to follow
const MarioCharacterSchema = new Schema({
  name: String,
  vweight: Number,
});

// Create a Model and assign a schema for it
const MarioCharacter = mongoose.model("mariocharacter", MarioCharacterSchema);
// In the line above "mariocharcter" is the collection name also called the module name this model is based on the MaricCharacterSchema schema
//Note: Only characters based on the mariocharcter module will be stored in the mariocharacter collection

// Finally export the module
module.exports = MarioCharacter;
