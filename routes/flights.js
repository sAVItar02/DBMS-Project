const express = require('express');
const auth = require('../middleware/auth');
const Flight = require('../models/flight');
const User = require('../models/user');
const Travelhistory = require('../models/travelhistory');

const router = new express.Router();

router.get('/flights', async function (req, res) {
  const { from, to } = req.query;
  const flights = await Flight.find()
    .where('from')
    .equals(from.toLowerCase())
    .where('to')
    .equals(to.toLowerCase());
  res.send(flights);
});

router.post('/flights', async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body);
    res.status(201).send(req.body);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/book', auth, async (req, res) => {
  const flight = req.query.id;
  const bookedFlight = { flight };
  User.flights.push(bookedFlight);
  User.save();
  // const travelHistory = await Travelhistory.create({
  //   custID: req.user.id,
  //   'flights.flight': flight,
  // });

  // const flightData = await Flight.findById(bookedFlight.flights.flight)

  res.send(bookedFlight);
});

module.exports = router;
