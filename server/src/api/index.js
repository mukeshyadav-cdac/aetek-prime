var path = require('path');
var router = require('express').Router();
const passport = require('passport');
const passportService = require('../services/passport');


const Authentication = require('../controllers/authentication');
const Users = require('../controllers/users');
const Campaign = require('../controllers/campaign')
import Weapons from '../controllers/weapons';

const requireAuth = passport.authenticate('jwt', { session: false});
const requireSignin = passport.authenticate('local', {session: false});



// Authentication
router.post('/signin', requireSignin, Authentication.signin);
router.post('/signup', Authentication.signup);

// User
router.get('/user', Users.getuser);
router.post('/user/addfavorite', Users.addFavorite);

// Fighter
router.get('/fighter', Campaign.getFighters);
router.post('/fighter', Campaign.newFighter);
router.put('/user/addfighter', Users.addFighter); // adds a figher to the logged in user

// Weapon
router.get('/weapon', Campaign.getWeapons);
router.get('/weapon/categories', Weapons.getCategories);
router.post('/weapon/addCategory', requireAuth, Weapons.addCategory);
router.post('/weapon', requireAuth, Weapons.newWeapon);
router.get('/weapon/:id', Campaign.getWeapon);

router.post('/weapon', Campaign.addWeapon);


// Faction
router.post('/faction', Campaign.addFaction);
router.get('/factions', Campaign.getFactions);
router.get('/faction/:name', Campaign.getFaction)


module.exports = router;
