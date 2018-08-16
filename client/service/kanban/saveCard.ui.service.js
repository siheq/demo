const saveCardRepository = require('../../repository/kanban/saveCard.ui.repository');

const saveCard = async params => {
  let result = await saveCardRepository.saveCard(params);
  return result;
};

module.exports = {saveCard};
