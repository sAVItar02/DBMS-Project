const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const auth = require('../middleware/auth');

const router = new express.Router();

router.post('/user/signup', async (req, res) => {
    
    const newUser = new User(req.body);
    
    try {
        await newUser.save();
        const token = newUser.generateAuthToken();
        res.status(200).send({body: req.body, token});

    } catch (e) {
        res.status(400).send(e);
    }

});

router.post('/user/login', async (req, res) => {
    
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        console.log(user);
        user.generateAuthToken();
        res.status(200).send({body: req.body});

    }catch(e) {
        res.status(400).send(e);
    }
})

router.get('/profile', auth, async (req, res) => {
    res.send(req.user);
})

module.exports = router;