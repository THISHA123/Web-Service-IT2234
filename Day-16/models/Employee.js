const mongoose = require('mongoose');
const Department = require('./Department');
const Project = require('./Project');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    jobTitle: { type: String },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },  // One to Many (Employee -> Department)
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]  // Many to Many (Employee <-> Project)
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
