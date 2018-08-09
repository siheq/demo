exports.login = (req, res) => {
  res.json({code: 'SUCCESS'});
};

exports.render = (req, res) => {
  res.render('views/login');
};
