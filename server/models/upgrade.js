const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upgradeSchema = new Schema({
  name: { type: String, default: ""},
  cost: { type: Number, default: 0},
  type: { type: String, default: ""},
  description: { type: String, default: ""}
});

const upgradeClass = mongoose.model('upgrade', upgradeSchema);

module.exports = upgradeClass;
