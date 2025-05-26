const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    projectDescription: { type: String },
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]  // Many to Many (Project <-> Employee)
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
