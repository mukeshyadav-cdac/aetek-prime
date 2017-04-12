const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
  faction: { type: String, default: ""},
  name: { type: String, default: ""},
  cost: { type: Number, default: 0},
  type: { type: String, default: ""},
  
  standard_profile: {
    range_melee: { type: String, default: ""},
    range_short: { type: String, default: ""},
    range_long: { type: String, default: ""},
    strength: { type: String, default: ""},
    damage: { type: String, defualt: ""},
    save_mod: { type: String, default: ""},
    ammo_roll: { type: String, default: ""},
    special_rules: [{ name: String, description: String }]
  },

  secondary_profile: {
    range_melee: { type: Number, default: 0},
    range_short: { type: Number, default: 0},
    range_long: { type: Number, default: 0},
    strength: { type: Number, default: 0},
    damage: { type: Number, defualt: 0},
    save_mod: { type: Number, default: 0},
    ammo_roll: { type: Number, default: 0},
    special_rules: [{ name: String, description: String }]
  },

  tertiary_profile: {
    range_melee: { type: Number, default: 0},
    range_short: { type: Number, default: 0},
    range_long: { type: Number, default: 0},
    strength: { type: Number, default: 0},
    damage: { type: Number, defualt: 0},
    save_mod: { type: Number, default: 0},
    ammo_roll: { type: Number, default: 0},
    special_rules: [{ name: String, description: String }]
  }
});

const weaponClass = mongoose.model('weapon', weaponSchema);

module.exports = weaponClass;
