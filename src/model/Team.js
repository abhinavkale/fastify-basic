const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: String,
  captain: String,
  playerCount: Number,
  homeground: String,
  champions: [{ year: Number }],
  coach: String,
});

module.exports = mongoose.model("Team", TeamSchema);
