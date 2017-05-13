const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const upgrade = require('./upgrade')


const fighterSchema = new Schema({
  name: { type: String, default: ""},
  role: { type: String, default: ""},
  equipment: [{ type: Schema.Types.ObjectId, ref: 'weapon'}],
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
  upgrades: [{ type: Schema.Types.ObjectId, ref: 'upgrade'}],
  faction: { type: String, default: 0},
  available_upgrade_types: [String],
  upgraded_t: { type: Boolean, default: false},
  upgraded_m: { type: Boolean, default: false},
  upgraded_s: { type: Boolean, default: false},
  upgraded_ws: { type: Boolean, default: false},
  upgraded_bs: { type: Boolean, default: false},
  upgraded_i: { type: Boolean, default: false},
  upgraded_w: { type: Boolean, default: false},
  upgraded_a: { type: Boolean, default: false},
  psychic_abilities: [String],
  cost: Number
});

const FighterClass = mongoose.model('fighter', fighterSchema);

module.exports = FighterClass;
