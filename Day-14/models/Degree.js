const mongoose = require('mongoose');

const degreeSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  credits: { type: Number, required: true },
  duration: { type: Number, required: true },
  faculty: { type: String }
});

const Degree = mongoose.model('Degree', degreeSchema);
module.exports = Degree;
