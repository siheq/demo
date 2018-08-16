const saveCardRepository = require('../../repository/kanban/cardData.ui.repository');

const saveCard = async params => {
  let result = await saveCardRepository.saveCard(params);
  return result;
};

const updateCard = async params => {
  let result = await saveCardRepository.updateCard(params);
  return result;
};

module.exports = {
  saveCard,
  updateCard,
};
