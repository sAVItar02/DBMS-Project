const express = require('express');
const Flight  = require('../models/flight');

const router = new express.Router();


router.get('/flights', async function(req, res){
    console.log(req.query);
    const flight = await Flight.find().where('from').equals(req.query.from).where('to').equals(req.query.to);
    res.send(flight);
});


router.post("/flights", async (req, res) => {
    try{
        const newFlight = await Flight.create(req.body);
        res.status(201).send(req.body);
        
    }catch(err){
        res.status(400).send(err);
        }
    }
);

module.exports = router;