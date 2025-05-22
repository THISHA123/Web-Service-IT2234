const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  date_of_birth: { type: Date },
  gender: { type: String, required: true },
  degreeID: {
    type: String,
    required: true,
    ref: 'Degree' // Must match the model name
  }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
