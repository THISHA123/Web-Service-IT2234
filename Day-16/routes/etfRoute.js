const express = require('express');
const router = express.Router();
const ETF = require('../models/ETF');

// Get all ETFs
router.get('/', async (req, res) => {
    try {
        const etfs = await ETF.find();
        res.status(200).json(etfs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get ETF by ID
router.get('/:id', async (req, res) => {
    try {
        const etf = await ETF.findById(req.params.id);
        if (!etf) {
            return res.status(404).json({ message: "ETF not found" });
        }
        res.status(200).json(etf);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new ETF
router.post('/', async (req, res) => {
    const { etfNo, balance, interestRate } = req.body;
    const newETF = new ETF({ etfNo, balance, interestRate });

    try {
        const savedETF = await newETF.save();
        res.status(201).json(savedETF);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
