const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
  name: { type: String, default: "", unique: true},
  cost: { type: Number, default: 0},
  type: { type: String, default: ""}
});

const weaponClass = mongoose.model('weapon', weaponSchema);

module.exports = weaponClass;
