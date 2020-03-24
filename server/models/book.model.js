const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  abstract: {
    type: String,
    require: true
  },
  author: {
    type: String
  },
  content: {
    type: String,
    trim: true,
    required: true
  },
  showTime: {
    type: Date,
    default: Date.now
  },
  bookType: {
    type: String
  },
  cover: {
    type: String
  },
  tags: {
    type: Array
  }
}, {
    versionKey: false
  });


module.exports = mongoose.model('Book', BookSchema);
