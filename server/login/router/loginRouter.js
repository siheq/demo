'use strict'

module.exports = function (app) {
  let con = require('../controller/login.js')

  app.route('/login').get(con.login);

  app.route('/api/login').post((req, res, next) => {
    console.log(req.query);
  });
};
