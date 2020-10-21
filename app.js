const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flightRouter = require('./routes/flights');
const userRouter = require('./routes/login');

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
  console.log(`App running on port ${PORT}...`);
});

// module.exports = app;
