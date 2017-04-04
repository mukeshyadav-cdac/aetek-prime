var path = require('path');
var router = require('express').Router();
const passport = require('passport');
const passportService = require('../services/passport');


const Authentication = require('../controllers/authentication');
const Users = require('../controllers/users');
const Campaign = require('../controllers/campaign')

const requireAuth = passport.authenticate('jwt', { session: false});
const requireSignin = passport.authenticate('local', {session: false});


// Authentication routes
router.post('/signin', requireSignin, Authentication.signin);
router.post('/signup', Authentication.signup);

// User information routes
router.get('/user', Users.getuser);
router.post('/user/addfavorite', Users.addFavorite);

// Campaign information routes
// fighters
router.get('/fighter', Campaign.getFighters);
router.post('/fighter', Campaign.newFighter);

module.exports = router;