const saveCardRepository = require('../repository/saveCard.repository');

const saveCard = params => {
  saveCardRepository.saveCard(params);
};

module.exports = {saveCard};
