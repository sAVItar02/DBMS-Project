var TravelSchema = new mongoose.Schema({
 seatNo: {
    type: Number,
    required: true
 },
 seatType: {
    type: String,
    required:true
 },
  fid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Flights"
 },
});
