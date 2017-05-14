import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const weaponSchema = new Schema({
  name: { type: String, default: ""},
  cost: { type: Number, default: 0},
  parent: { type: mongoose.Schema.Types.ObjectId, default: null },
  ancestors: [{
    _id: mongoose.Schema.Types.ObjectId,
    name: String
  }]

});

const weaponClass = mongoose.model('weapon', weaponSchema);

module.exports = weaponClass;
