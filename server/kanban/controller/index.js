const saveCardSerice = require('../service/saveCard.service');

exports.render = (req, res, next) => {
  res.render('views/kanban');
};

exports.saveCard = (req, res, next) => {
  console.log(req, 'body');
  const {content, type} = req.body;
  let param = {
    content,
    type,
    userId: '5b74e8e0676c2248d0d12416',
  };
  saveCardSerice.saveCard(param);
  res.json({
    code: 'SUCCESS',
  });
};
