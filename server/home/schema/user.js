var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  password: String
}) 

var userModel = mongoose.model('test',userSchema)

module.exports = userModel