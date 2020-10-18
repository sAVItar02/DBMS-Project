const express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  flightRouter = require('./routes/flights');
userRouter = require('./routes/login');

require('./db/mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(require('cors')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// FLIGHTS

app.use(flightRouter);
app.use(userRouter);

app.listen(PORT, function () {
  console.log('Running servers!');
});
