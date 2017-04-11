const User = require('../models/user');
const Fighter = require('../models/fighter')
const Weapon = require('../models/weapon')
const Faction = require('../models/faction')

const decode = require('jwt-decode')

const checkIfLoggedIn = function (jwt) {
  if (!jwt) {
    return false
  } else {
    return true
  }
}

const checkIfAdmin = function (jwt) {
  var role = decode(jwt).role
  if (role != "admin") {
    return false
  } else {
    return true
  }
}

// Fighters

exports.getFighters = function(req, res, next){
  
  var query = Fighter.find()
  var promise = query.exec()

  promise.then(function(data) {
    res.json(data).status(200)
  })
}

exports.newFighter = function(req, res, next){

  Fighter.findOne({name: req.body.name}, function(err, existingFighter){
    // check if user exists
    if(existingFighter){
      return res.status(422).send({ error: 'fighter with that name already exists'})
    }

    // if no fighter exists, create a new fighter object
    // and set properties based on req.body data
    var newFighter = new Fighter(req.body)

    newFighter.save(function(err, fighter) {
      if (err) {
        console.log(err);
        res.json(err).status(501)
      } else {
        res.json({success: "Added!", fighter}).status(200)
      }
    })
  })
}


// Weapons

exports.getWeapons = function(req, res, next) {
  
  if(!checkIfLoggedIn(req.get("authorization"))) {
    res.json({error: "You must be logged in"}).status(422)
  }

  if(!checkIfAdmin(req.get("authorization"))){
    res.json({error: "You must be an admin to perform this task"}).status(422)
  }

  var query = Weapon.find()
  var promise = query.exec()

  promise.then(function(data) {
    res.json(data).status(200)
  })

}

exports.getWeapon = function(req, res, next) {
  
  var query = Weapon.findById(req.params.id)
  var promise = query.exec()

  promise
    .then(function(data) {
      res.json(data).status(201)
    })
    .catch(function(err) {
      res.json(err).status(501)
    })
}

exports.addWeapon = function(req, res, next) {

  if(!checkIfLoggedIn(req.get("authorization"))) {
    res.json({error: "You must be logged in"}).status(422)
  }

  if(!checkIfAdmin(req.get("authorization"))){
    res.json({error: "You must be an admin to perform this task"}).status(422)
  }

  var newWeapon = new Weapon(req.body)

  newWeapon.save(function(err, weapon) {
    if(err) {
      console.log(err)
      res.json(err).status(501)
    } else {
      res.json({success: "Added!", weapon}).status(200)
    }
  })


}

// Faction

exports.addFaction = function(req, res, next) {

  var newFaction = new Faction(req.body)

  newFaction.save(function(err, faction) {
    if(err) {
      res.json(err).status(501)
    } else {
      res.json(faction).status(200)
    }
  })

}

exports.getFactions = function (req, res, next) { 

  var query = Faction.find()
  var promise = query.populate('weapons_and_equipment').populate('available_fighters.default_equipment').exec()

  promise.then(function(data) {
    res.json(data).status(200)
  })
}