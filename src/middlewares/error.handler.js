const RESPONSE_CODE = require('../helpers/response-code');

exports.errorHandler = (error, req, res,next) => {
  if (error) {
    return res.status(500).json(RESPONSE_CODE.internalServerError(error.message));
  }
    next();
};
