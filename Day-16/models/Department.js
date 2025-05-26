const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String }
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
