const EXPRESS = require('express');
const APP = EXPRESS();

APP.use('/', async (req, res) => {
  return res.json({ msg: 'OK' });
});

module.exports = APP;
