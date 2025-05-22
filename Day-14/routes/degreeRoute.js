const express = require('express');
const router = express.Router();
const Degree = require('../models/Degree');

router.get('/', async (req, res) => {
  try {
    const results = await Degree.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
