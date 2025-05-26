const mongoose = require('mongoose');

const etfSchema = new mongoose.Schema({
    etfNo: { type: String, required: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true }
});

const ETF = mongoose.model('ETF', etfSchema);

module.exports = ETF;
