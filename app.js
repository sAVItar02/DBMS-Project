const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flightRouter = require('./routes/flights');
const userRouter = require('./routes/login');

const app = express();

app.use(require('cors')());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// FLIGHTS

app.use(flightRouter);
app.use(userRouter);

module.exports = app;
