'use strict'

module.exports = function(app){
  let con = require('../controller/login.js')

  app.route('/login').get(con.login)
}