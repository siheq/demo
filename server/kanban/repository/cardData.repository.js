const CardModal = require('../modal/card.modal');

const saveCard = params => {
  return new Promise((resolve, reject) => {
    let modal = new CardModal(params);
    modal.set({operation: 'ADD'});
    modal.save(params, (err, value) => {
      if (err) {
        console.log('error', err);
        reject(err);
      }
      resolve(value);
    });
  });
};

const updateCard = params => {
  return new Promise((resolve, reject) => {
    CardModal.findOne({_id: params._id}, (err, value) => {
      if (!err) {
        value.set({operation: 'UPDATED', updated: new Date()});
        value.save((err, historyValue) => {
          if (err) {
            reject(err);
            console.log('save history value err:', err);
          }
          else {
            historyValue.set({operation: 'UPDATE'});
            // historyValue = Object.assign({}, historyValue);
            delete historyValue._doc._id;
            let newModal = new CardModal(historyValue._doc);
            // let newModal = new CardModal(historyValue);
            newModal.save((err, updateValue) => {
              if (!err) {
                resolve(updateValue);
              }
              else {
                reject(err);
                console.log('update save err:', err);
              }
            });
          }
        });
      }
    });
    // CardModal.update({_id: params._id}, {content: params.content, type: params.type}, (err, value) => {
    //   if (err) {
    //     console.log('error', err);
    //     reject(err);
    //   }
    //   resolve(value);
    // });
  });
};

module.exports = {
  saveCard,
  updateCard,
};
