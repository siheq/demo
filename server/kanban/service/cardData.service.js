const saveCardRepository = require('../repository/cardData.repository');

const saveCard = async params => {
  let result = await saveCardRepository.saveCard(params);
  return result;
};

const updateCard = params => {
  saveCardRepository.updateCard(params);
};

module.exports = {
  saveCard,
  updateCard,
};
