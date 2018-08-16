const CardModal = require('../modal/card.modal');

const saveCard = params => {
  let modal = new CardModal(params);
  modal.save(params, err => {
    if (err) {
      console.log('error', err);
    }
  });
};

module.exports = {saveCard};
