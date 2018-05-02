var mongoose = require('mongoose');
var userModel = require('../schema/user.js')

module.exports = () => {

  var wangwu = new userModel({ name: 'wangwu' ,password: '526'})

  console.log(wangwu.name)

  wangwu.save((err)=>{
    console.log(err)
  })

  
}


