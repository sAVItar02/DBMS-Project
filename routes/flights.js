const express = require('express');


const router = new express.Router();

router.get('/flights', function(req, res){
    res.json(req.query);
});

module.exports = router;