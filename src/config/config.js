require('dotenv').config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOSTNAME,
  DB_DEVELOPMENT,
  DB_PRODUCTION,
  DB_DIALECT,
  DB_POOL_MAX,
  DB_POOL_MIN,
  DB_POOL_ACQUIRE,
  DB_POOL_IDLE,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DEVELOPMENT,
    host: DB_HOSTNAME,
    dialect: DB_DIALECT,
    pool: {
      max: parseInt(DB_POOL_MAX),
      min: parseInt(DB_POOL_MIN),
      acquire: parseInt(DB_POOL_ACQUIRE),
      idle: parseInt(DB_POOL_IDLE),
    },
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_PRODUCTION,
    host: DB_HOSTNAME,
    dialect: DB_DIALECT,
    pool: {
      max: parseInt(DB_POOL_MAX),
      min: parseInt(DB_POOL_MIN),
      acquire: parseInt(DB_POOL_ACQUIRE),
      idle: parseInt(DB_POOL_IDLE),
    },
  },
};
