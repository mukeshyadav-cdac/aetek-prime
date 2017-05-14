import Weapon from '../models/weapon'


export default {
  getCategories: (req, res, next) => {
    let query = Weapon.find({parent: null});
    let promise = query.exec();
    promise.then(function(data){
      res.json({categories: data}).status(200);
    });
  },

  addCategory: (req, res, next) => {
    let newWeapon = new Weapon(req.body)

    newWeapon.save(function(err, weapon){
      if( err ) {
        console.log(err)
        res.json(err).status(501)
      } else {
        res.json(weapon).status(200)
      }
    });
  },

  newWeapon: (req, res, next) => {
    let parent_category_query = Weapon.findOne({_id: req.body.ancestors})
    let promise = parent_category_query.exec();
    promise.then(parent => {
      let new_weapon = {
        name: req.body.name,
        cost: req.body.cost,
        parent: req.body.ancestors,
        ancestors: [{name: parent.name, _id: parent._id}]
      }
      let newWeapon = new Weapon(new_weapon)
      newWeapon.save(function(err, weapon) {
        if( err ) {
          console.log(err)
          res.json(err).status(501)
        } else {
          res.json(weapon).status(200)
        }
      });
    });
  }
}
