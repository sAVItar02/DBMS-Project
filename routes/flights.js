const express = require('express');
const Flight  = require('../models/flight');

const router = new express.Router();

router.get('/flights', function(req, res){
    res.send("Hello");
});

router.post("/flights", async function(req, res){
    const newFlight = new Flight(req.body);
    try{
        await newFlight.save();
        res.status(201).send(newFlight);
    }
    catch(e){
        res.status(400).send(e);
    }
});

module.exports = router;