const saveCardSerice = require('../service/saveCard.service');

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
  await saveCardSerice.saveCard(param);
  res.json({
    code: 'SUCCESS',
  });
};

module.exports = {
  render,
  saveCard,
};

// const updateAlarm = async (req, res) => {
//   const criteria = req.body;
//   const result = await alarmService.updateAlarmById(criteria);
//   res.json(result);
// };
