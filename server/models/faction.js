const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weapon_schema = new Schema({
  faction: { type: String, default: ""},
  name: { type: String, default: ""},
  cost: { type: Number, default: 0},
  type: { type: String, default: ""},
  
  standard_profile: {
    range_melee: { type: Number, default: 0},
    range_short: { type: Number, default: 0},
    range_long: { type: Number, default: 0},
    strength: { type: Number, default: 0},
    damage: { type: Number, defualt: 0},
    save_mod: { type: Number, default: 0},
    ammo_roll: { type: Number, default: 0},
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

const available_fighters_schema = new Schema({
    name: { type: String, default: ""},
    role: { type: String, default: ""},
    default_equipment: [String],
    equipment: [String],
    m: { type: Number, default: 0},
    ws: { type: Number, default: 0},
    bs: { type: Number, default: 0},
    s: { type: Number, default: 0},
    t: { type: Number, default: 0},
    w: { type: Number, default: 0},
    i: { type: Number, default: 0},
    a: { type: Number, default: 0},
    ld: { type: Number, default: 0},
    available_upgrade_types: [String],
    psychic_abilities: [String],
    cost: { type: Number, default: 0},
  })

const factionSchema = new Schema({
  name: { type: String, default: ""},
  special_rules: [String],

  available_fighters: [available_fighters_schema],

  minimum_team_size: { type: Number, default: 0},
  maximum_team_size: { type: Number, default: 0},
  weapons_and_equipment: [weapon_schema]
});

const factionClass = mongoose.model('faction', factionSchema);

module.exports = factionClass;
