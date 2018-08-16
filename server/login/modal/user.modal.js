const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  userName: String,
  password: String,
  email: String,
});

const modal = new mongoose.Model('user', schema, 'user');

module.exports = modal;
