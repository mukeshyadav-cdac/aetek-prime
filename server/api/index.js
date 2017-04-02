var path = require('path');
var router = require('express').Router();
const passport = require('passport');
const passportService = require('../services/passport');
const Authentication = require('../controllers/authentication');
const Users = require('../controllers/users');

const requireAuth = passport.authenticate('jwt', { session: false});
const requireSignin = passport.authenticate('local', {session: false});

router.get('/testing', function(req, res){
  res.json({"hello": "world!"}).status(200)
})

// Authentication routes
router.post('/signin', requireSignin, Authentication.signin);
router.post('/signup', Authentication.signup);

// User information routes
router.get('/user', Users.getuser);
router.post('/user/addfavorite', Users.addFavorite);

module.exports = router;