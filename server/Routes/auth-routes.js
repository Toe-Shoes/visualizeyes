const router = require('express').Router();
const passport = require('passport');
const Strategy = require('passport-github').Strategy; 
  
import LoginPage from '../../../client/containers/LoginPage.jsx';


passport.use(new Strategy({
  clientID: "2dc2eeb9fde8048cd538",
  clientSecret: "49c4b350d4731ab68cbc1e219b104b03e74e80c7",
  callbackURL: 'http://localhost:3000/auth/github/callback'
},
function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Define routes.
app.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });

app.get('/login',
  function(req, res){
    res.render('LoginPage');
  });

app.get('/login/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

router.get('/auth/login', (req, res) => {
  // place login auth logic
  res.render('login')
});

router.get('/auth/logout', (req, res) => {
  // handle with passport
  res.send('loggin out')
});

router.get('/auth/github', (req, res) => {
  // handle with passport
  res.send('login with github');
})

module.exports = router;

