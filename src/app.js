const EXPRESS = require('express');
const PATH = require('path');
const COOKIE_PARSER = require('cookie-parser');
const LOGGER = require('morgan');
const CORS = require('cors');
require('dotenv').config();

const INDEX_ROUTE = require('./api/routes/index');
const NOT_FOUND_HANDLER = require('./middlewares/not-found-middleware');
const ERROR_HANDLER = require('./middlewares/error-middleware');

const APP = EXPRESS();

APP.use(LOGGER('dev'));
APP.use(EXPRESS.json());
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use(COOKIE_PARSER());
APP.use(CORS());
APP.use(EXPRESS.static(PATH.join(__dirname, 'public')));

APP.use('/api/v1', INDEX_ROUTE);
APP.use(ERROR_HANDLER);
APP.use(NOT_FOUND_HANDLER);

module.exports = APP;
