const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

// Middleware
app.use(express.json());

// Routes
const employeeRoute = require('./routes/Employee');
const departmentRoute = require('./routes/Department');
const projectRoute = require('./routes/Project');
const etfRoute = require('./routes/ETF');

app.use('/employee', employeeRoute);
app.use('/department', departmentRoute);
app.use('/project', projectRoute);
app.use('/etf', etfRoute);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/employeeDB')
    .then(() => console.log('Database connected'))
    .catch((error) => console.error('Error connecting to MongoDB', error));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
