const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', async (req, res) => {
  try {
    const results = await Student.find().populate('degreeID');
    res.status(200).json(results);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
