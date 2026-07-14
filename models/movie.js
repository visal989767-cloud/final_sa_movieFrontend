//const mongoose = require('mongoose');

//const movieSchema = new mongoose.Schema({
 // title: { type: String, required: true },
 // year: { type: Number, required: true },
  //genre: { type: String, required: true },
  //rating: { type: Number },
  //description: { type: String },
  //poster: { type: String },
  //trailer: { type: String },
  //director: { type: String },
  //duration: { type: String },
  //featured: { type: Boolean, default: false },
  //newRelease: { type: Boolean, default: false },
  //opularity: { type: Number }
//}, {
//  versionKey: false 
//});

//module.exports = mongoose.model('Movie', movieSchema);

const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    image: String,
    trailer: String,
    rating: { type: Number, default: 0 }
});

module.exports = mongoose.model("Movie", MovieSchema);