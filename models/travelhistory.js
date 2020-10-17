const mongoose = require('mongoose');
const user = require('./user');
const flight = require('./flight');

// const travelHistorySchema = new mongoose.Schema({

//  PassengerName: {
//    type: String,
//    required: true,
//    trim: true
//  },
//  cost: {
//    type: mongoose.Schema.Types.ObjectId,
//    required: true,
//    ref: "Payments"
//  },
//  dateOfBooking: {
//    type: Timestamp,
//    required: true
//  },
//  flightDate: {
//    type: Timestamp,
//    required: true
//  },
//  paymentID: {
//    type: mongoose.Schema.Types.ObjectId,
//    ref: 'Payment'
//  },
//  locationFrom: {
//    type: String,
//    required: true
//  },
//  locationTo: {
//    type: String,
//    required: true
//  }
// })

const travelHistorySchema = new mongoose.Schema({

  custID:{
    type: mongoose.Schema.Types.ObjectId,
    ref: user
  },
  flightID:{
    type: mongoose.Schema.Types.ObjectId,
    ref: flight
  }

});

module.exports = mongoose.model("Travelhistory", travelHistorySchema);
