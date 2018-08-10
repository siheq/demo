'use strict';

module.exports = function (app) {
  // Root routing
  var conn = require('../controller/handlerFacility.js');
  // Define application route
  app.route('/facility').get(conn.con);
};
