const cardModal = require('../modal/card.modal');

const saveCard = params => {
  cardModal.save(params, err => {
    if (err) {
      console.log('error', err);
    }
  });
};

module.exports = {saveCard};
