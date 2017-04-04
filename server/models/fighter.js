const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fighterSchema = new Schema({
  name: { type: String, default: "", unique: true},
  role: { type: String, default: ""},
  equipment: [{ type: String, default: ""}],
  m: { type: Number, default: 0},
  ws: { type: Number, default: 0},
  bs: { type: Number, default: 0},
  s: { type: Number, default: 0},
  t: { type: Number, default: 0},
  w: { type: Number, default: 0},
  i: { type: Number, default: 0},
  a: { type: Number, default: 0},
  ld: { type: Number, default: 0},
  missions_completed: { type: Number, default: 0},
  frenzy: { type: Boolean, default: false},
  miss_next_mission: { type: Boolean, default: false},
  hatred: { type: Boolean, default: false},
  requires_upgrade: { type: Boolean, default: false},
  upgrades: [String],
  faction: { type: String, default: 0},
  upgraded_t: { type: Boolean, default: false},
  upgraded_m: { type: Boolean, default: false},
  upgraded_s: { type: Boolean, default: false},
  upgraded_ws: { type: Boolean, default: false},
  upgraded_bs: { type: Boolean, default: false},
  upgraded_i: { type: Boolean, default: false},
  upgraded_w: { type: Boolean, default: false},
  upgraded_a: { type: Boolean, default: false},
  cost: Number

});

const FighterClass = mongoose.model('fighter', fighterSchema);

module.exports = FighterClass;
