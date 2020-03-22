const mongoose = require('mongoose');

const CfgSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true
  },
  valu: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  note: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
}, {
    versionKey: false
  });


module.exports = mongoose.model('Cfg', CfgSchema);
