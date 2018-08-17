const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  userId: {
    type: Schema.ObjectId,
    ref: 'user',
  },
  content: String,
  type: String,
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  tag: {
    type: String,
    default: '还没有加',
  },
  operation: {
    type: String,
    default: 'ADD',
  },
});

const modal = mongoose.model('card', schema, 'card');
module.exports = modal;
