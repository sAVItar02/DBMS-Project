const express      = require("express"),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    passport       = require("passport"),
    localStrategy  = require("passport-local"),
    session        = require("express-session"),
    methodOverride = require("method-override"),
    flightRouter   = require('./routes/flights');

require('./db/mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Flights

app.use(flightRouter);

app.listen(PORT, function(){
    console.log("Running servers!");
});

