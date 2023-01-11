const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  continent: { type: String, required: true },
  photo: { type: String, required: true },
  population: { type: Number, required: true },
  userId: {type: mongoose.Types.ObjectId, ref: 'users', required: true}, //true
});

const City = mongoose.model("cities", schema);//schemaass
module.exports = City; //e
