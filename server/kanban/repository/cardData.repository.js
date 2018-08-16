const CardModal = require('../modal/card.modal');

const saveCard = params => {
  return new Promise((resolve, reject) => {
    let modal = new CardModal(params);
    modal.save(params, (err, value, second) => {
      if (err) {
        console.log('error', err);
        reject(err);
      }
      resolve(value);
    });
  });
};

const updateCard = params => {
  CardModal.update({_id: params._id}, {content: params.content, type: params.type}, err => {
    if (err) {
      console.log('error', err);
    }
  });
};

module.exports = {
  saveCard,
  updateCard,
};
