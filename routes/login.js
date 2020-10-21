const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const Flights = require('../models/flight');

const router = new express.Router();

router.post('/user/signup', async (req, res) => {
  const newUser = new User(req.body);

  try {
    await newUser.save();
    const token = await newUser.generateAuthToken();
    res.status(200).send({ body: req.body, token: token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/user/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    console.log(user);
    const token = await user.generateAuthToken();
    res.status(200).send({ body: req.body, token: token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/profile', auth, async (req, res) => {
  res.send(req.user);
});

router.get('/travelHistory', auth, async (req, res) => {
  allFLights = [];
  req.user.flights.forEach((flight, index) => {
    Flights.find({ _id: flight.flight })
      .then((flight) => {
        allFLights.push(flight[0]);
        if (req.user.flights.length - 1 == index) {
          res.status(201).send(allFLights);
        }
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  });
});

router.get('/paymentHistory', auth, async (req, res) => {
  allPayments = [];
  req.user.flights.forEach((flight, index) => {
    Flights.find({ _id: flight.flight })
      .then((flight) => {
        myObj = {
          flightCode: flight[0].flightCode,
          price: flight[0].price,
          depTime: flight[0].depTime,
        };
        allPayments.push(myObj);
        if (req.user.flights.length - 1 == index) {
          res.status(201).send(allPayments);
        }
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  });
});

module.exports = router;
