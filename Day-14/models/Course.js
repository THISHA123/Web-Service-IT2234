const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  credits: { type: Number, required: true },
  description: { type: String }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
