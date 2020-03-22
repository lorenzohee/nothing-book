const mongoose = require('mongoose');

const FeedBackSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  company: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
}, {
    versionKey: false
  });


module.exports = mongoose.model('FeedBack', FeedBackSchema);
