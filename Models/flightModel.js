var FlightSchema = new mongoose.Schema({
 checkinWeight: {
    type: Number,
    required: true,
    trim: true
 },
 cabinWeight: {
    type: Number,
    required: true,
    trim: true
 },
 arrTime: {
     type: Timestamp,
    required: true
 },
 depTime: {
    type: Timestamp,
    required: true
 },
 from: {
    type: String,
    required: true,
    trim: true
 },
 to: {
    type: String,
    required: true,
    trim: true
 },
 duration: {
    type: Number
 },
 company: {
    type: String,
    required: true,
    trim: true
 }
});
