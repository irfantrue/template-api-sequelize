const RESPONSE_CODE = require('../helpers/response-code');

module.exports = (error, req, res, next) => {
  return res.status(500).json(RESPONSE_CODE.internalServerError(error.message));
};
