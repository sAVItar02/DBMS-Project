const express = require('express');


const router = new express.Router();

router.get('/flights', function(req, res){
    res.send(req.query);
});

module.exports = router;