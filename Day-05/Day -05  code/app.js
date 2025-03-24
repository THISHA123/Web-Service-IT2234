const express = require('express');
const app = express();
const port = 3000;

// Import students array from studentdb.js
const students = require('./DB/studentdb');

// Get all students
app.get('/stu', (req, res) => {
    res.send(students);
});

// Get student by regno 
app.get('/stu/:regno', (req, res) => {
    const regno = req.params.regno;
    const result = students.find(student => student.regno === regno);
    
    if (result) {
        res.send(result);
    } else {
        res.status(404).send({ error: "Student not found" });
    }
});

// Find students by gender
app.get('/stu/gender/:gen', (req, res) => {
    const gender = req.params.gen.toLowerCase(); // Case insensitive
    const result = students.filter(student => student.gender.toLowerCase() === gender);

    if (result.length > 0) {
        res.send(result);
    } else {
        res.status(404).send({ error: "No students found for the given gender" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
