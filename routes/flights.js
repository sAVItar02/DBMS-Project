const express = require('express');


const router = new express.Router();

router.get('/flights', function(req, res){
    console.log(req.query);
});

module.exports = router;