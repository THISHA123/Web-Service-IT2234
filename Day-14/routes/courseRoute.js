const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  try {
    const results = await Course.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await Course.findById(req.params.id);
    if (result) res.status(200).json(result);
    else res.status(404).send("Course not found");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.get('/code/:cid', async (req, res) => {
  try {
    const result = await Course.find({ code: req.params.cid });
    if (result.length) res.status(200).json(result);
    else res.status(404).send("Course not found");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.post('/', async (req, res) => {
  try {
    const { code, name, credits, description } = req.body;
    if (!code || !name || !credits) {
      return res.status(400).send("Missing required fields");
    }
    const result = await Course.create({ code, name, credits, description });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { code, name, credits, description } = req.body;
    const result = await Course.findByIdAndUpdate(req.params.id, {
      code, name, credits, description
    }, { new: true });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await Course.findByIdAndDelete(req.params.id);
    if (result) res.status(200).json(result);
    else res.status(404).send("Course not found");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
