const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); //directing path for path__dirname
const PORT = process.env.PORT || 3000;
const app = express();
const dbControllers = require('./mongodb/dbControllers');

var passport = require('passport');
var Strategy = require('passport-github').Strategy;

app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, './../build/webpack-bundle.js')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

passport.use(new Strategy({
    clientID: "2dc2eeb9fde8048cd538",
    clientSecret: "49c4b350d4731ab68cbc1e219b104b03e74e80c7",
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Configure view engine to render EJS templates.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
// app.use(require('morgan')('combined'));


// Initialize Passport and restore authentication state, if any, from the
// session.

app.get('/visualeyes', 
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
      res.cookie('username',req.user.username);
      console.log(req.user);
      res.sendFile(path.resolve(__dirname + '/../build/index.html'));
    });

app.get('/',
  function(req, res){
    res.render('login');
  });

app.get('/login/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/visualeyes');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });


//UTILITY ROUTES
app.get('/getdb', dbControllers.getDatabase);
app.post('/getdb', dbControllers.updateDatabase);



// //if anything else redifect us to index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + 'build/index.html'));
// });

app.listen(3000);












