const mongoose = require('mongoose');
const user = require('./user');
const flight = require('./flight');

const travelHistorySchema = new mongoose.Schema({
  
  user: {
    custID: {
      type: String,
      ref: user,
    },
    flights: [
      {
        _id: false,
        flight: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

module.exports = mongoose.model('Travelhistory', travelHistorySchema);
