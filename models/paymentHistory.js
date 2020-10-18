const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  cost: {
    type: Number,
    required: true,
    min: 0,
  },
  flightID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Flights',
  },
  custID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

module.exports = mongoose.model('Payment', paymentSchema);
