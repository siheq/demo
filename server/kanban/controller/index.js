const saveCardSerice = require('../service/cardData.service');

const render = (req, res) => {
  res.render('views/kanban');
};

const saveCard = async (req, res) => {
  console.log(req.query, req.body, 'body');
  const {content, type} = req.body;
  let param = {
    content,
    type,
    userId: '5b74e8e0676c2248d0d12416',
  };
  let result = await saveCardSerice.saveCard(param);
  res.json({
    code: 'SUCCESS',
    data: result,
  });
};

const updateCard = async (req, res) => {
  console.log(req.query, req.body, 'body');
  const {content, type, _id} = req.body;
  let param = {
    content,
    type,
    userId: '5b74e8e0676c2248d0d12416',
    _id,
  };
  await saveCardSerice.updateCard(param);
  res.json({
    code: 'SUCCESS',
  });
};

module.exports = {
  render,
  saveCard,
  updateCard,
};

// const updateAlarm = async (req, res) => {
//   const criteria = req.body;
//   const result = await alarmService.updateAlarmById(criteria);
//   res.json(result);
// };
