const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  userId: {
    type: Schema.ObjectId,
    ref: 'user',
  },
  content: String,
  type: String,
});

const modal = mongoose.model('card', schema, 'card');
module.exports = modal;
