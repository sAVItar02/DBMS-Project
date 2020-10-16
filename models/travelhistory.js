const mongoose = require("mongoose");

const travelHistorySchema = new mongoose.Schema({

 PassengerName: {
   type: String,
   required: true,
   trim: true
 },
 cost: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: "Payments"
 },
 dateOfBooking: {
   type: Timestamp,
   required: true
 },
 flightDate: {
   type: Timestamp,
   required: true
 },
 paymentID: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Payment'
 },
 locationFrom: {
   type: String,
   required: true
 },
 locationTo: {
   type: String,
   required: true
 }
})

module.exports = mongoose.model("Travelhistory", travelHistorySchema);
