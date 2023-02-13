#!/usr/bin/env node

/**
 * Module dependencies.
 */

const APP = require('../app');
const DEBUG = require('debug')('latihan-api-mongoose:server');
const HTTP = require('http');
const DB = require('../models/index');

/**
 * Get port from environment and store in Express.
 */

const PORT = normalizePort(process.env.PORT || '3000');
APP.set('port', PORT);

/**
 *  Cek connection database
 */
const checkConnectionDatabase = async () => {
  try {
    await DB.sequelize.authenticate();
    console.log(`Connection database '${DB.sequelize.options.database}' has been successfully.`);
  } catch (error) {
    console.log(`Unable to connect database / Unknow database '${DB.sequelize.options.database}'`);
  }
};

checkConnectionDatabase();

/**
 * Create HTTP server.
 */

const server = HTTP.createServer(APP);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const PORT = parseInt(val, 10);

  if (isNaN(PORT)) {
    // named pipe
    return val;
  }

  if (PORT >= 0) {
    // port number
    return PORT;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const BIND = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(BIND + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(BIND + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const ADDR = server.address();
  const BIND = typeof ADDR === 'string' ? 'pipe ' + ADDR : 'port ' + ADDR.port;
  DEBUG('Listening on ' + BIND);
}
