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
  var flightID = { flight: req.query.id};
  User.findOneAndUpdate(
      {_id: req.user.id},
      { $push: {flights: flightID}},
      
  );
  // var bookedFlight = Travelhistory({
  //   user: {
  //     custID: req.user.id,
  //     flights: [
  //       {
  //         flight: req.query.id,
  //       },
  //     ],
  //   },
  // });
  // const f = await Travelhistory.create(bookedFlight);
  
});

module.exports = router;
