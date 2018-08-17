'use strict';
let controller = require('../controller');

module.exports = function (app) {
  // Define application route
  app.route('/kanban').get(controller.render);
  app.route('/api/save').post(controller.saveCard);
  app.route('/api/update').post(controller.updateCard);
};
