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

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// PASSPORT

// app.use(cookieParser('secret'));
// app.use(require("express-session")({
//     secret: "Database secret",
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new localStrategy(User.createStrategy()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// FLIGHTS

app.use(flightRouter);

app.listen(PORT, function(){
    console.log("Running servers!");
});

