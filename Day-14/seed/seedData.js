const mongoose = require('mongoose');
const Degree = require('./models/Degree');
const Student = require('./models/Student');

mongoose.connect('mongodb://localhost:27017/studentinfDB')
  .then(async () => {
    console.log("Seeding...");

    await Degree.create({
      _id: 'FAS2000ICT',
      name: 'Bachelor of Information Technology',
      credits: 3,
      duration: 250,
      faculty: 'Applied Science'
    });

    await Student.create({
      _id: '2021ICT109',
      name: 'Samra',
      date_of_birth: new Date('2002-12-05'),
      gender: 'Female',
      degreeID: 'FAS2000ICT'
    });

    console.log("Seeding complete");
    mongoose.disconnect();
  })
  .catch(console.error);
