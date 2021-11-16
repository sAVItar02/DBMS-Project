const mongoose = require('mongoose');
const app = require('./app.js');
app.use(require('cors')());

const DB =
  'mongodb+srv://DBMS-ADMIN:gTeGI8PpzwpuE2UG@cluster-flights.3h8gc.mongodb.net/Flights?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection Successful');
  });

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}...`);
});
