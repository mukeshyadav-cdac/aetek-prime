const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');
const decode = require('jwt-decode')

exports.getuser = function(req, res, next){
  if (!req.get("authorization")) {
    res.json({error: "You must be logged in to see this page"}).status(422)
  }

  var userId = decode(req.get("authorization")).sub
  var query = User.findById(userId)
  var promise = query.select("-password").exec()

  promise.then(function(data) {
    res.json(data).status(200)
  })
}

exports.addFavorite = function(req, res, next) {
  if (!req.get("authorization")) {
    res.json({error: "You must be logged in to see this page"}).status(422)
  }

  var userId = decode(req.get("authorization")).sub
  var newFavorite = {
    Title: req.body.Title,
    Year: req.body.Year,
    imdbID: req.body.imdbID,
    Poster: req.body.Poster
  }
  
  User.update({_id: userId}, {$push: {favorites: newFavorite}}, function(err, user) {
    if(err) {
      console.log(err)
    } else {
      res.send({success: newFavorite}).status(200)
    }
  })
}