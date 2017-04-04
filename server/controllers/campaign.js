const User = require('../models/user');
const Fighter = require('../models/fighter')

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
        res.json(fighter).status(200)
      }
    })
  })
}
