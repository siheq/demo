'use strict';

module.exports = function (app) {
  // Root routing
  var conn = require('../controller/controller.js');
  // Define application route
  app.route('/').get(conn.con);

};