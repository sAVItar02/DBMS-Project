const mongoose = require("mongoose");
const DB = "mongodb+srv://DBMS-ADMIN:gTeGI8PpzwpuE2UG@cluster-flights.3h8gc.mongodb.net/Flights?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection Successful');
});