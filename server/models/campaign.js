const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const campaignSchema = new Schema({
  name: { type: String, default: ""}
});

const CampaignClass = mongoose.model('campaign', campaignSchema);

module.exports = CampaignClass;
