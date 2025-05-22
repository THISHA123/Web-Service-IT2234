const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

const courseRoutes = require('./routes/courseRoute');
const studentRoutes = require('./routes/studentRoute');
const degreeRoutes = require('./routes/degreeRoute');

app.use(express.json());
app.use('/course', courseRoutes);
app.use('/student', studentRoutes);
app.use('/degree', degreeRoutes);

mongoose.connect('mongodb://localhost:27017/studenntinfDB')
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
