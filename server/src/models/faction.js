const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const available_fighters_schema = new Schema({
    name: { type: String, default: ""},
    role: { type: String, default: ""},
    default_equipment: [{type: Schema.Types.ObjectId, ref: 'weapon'}],
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
  weapons_and_equipment: [{type: Schema.Types.ObjectId, ref: 'weapon'}],
  number_of_specialists: { type: Number, default: 2}
});


const factionClass = mongoose.model('faction', factionSchema);

module.exports = factionClass;
