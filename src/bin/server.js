#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from "@root/app";
import http from "http";
import db from "@model";
import debug from "debug";

const DEBUG = debug("template-api-sequelize:server");

/**
 * Get port from environment and store in Express.
 */

const PORT = normalizePort(process.env.PORT || "3000");
app.set("port", PORT);

/**
 *  Cek connection database
 */
const checkConnectionDatabase = async () => {
  try {
    await db.sequelize.authenticate();
    console.log(
      `Connection database '${db.sequelize.options.database}' has been successfully.`
    );
  } catch (error) {
    console.log(
      `Unable to connect database / Unknow database '${db.sequelize.options.database}'`
    );
  }
};

checkConnectionDatabase();

/**
 * Create http server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
server.on("error", onError);
server.on("listening", onListening);

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
 * Event listener for http server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const BIND = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(BIND + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(BIND + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for http server "listening" event.
 */

function onListening() {
  const ADDR = server.address();
  const BIND = typeof ADDR === "string" ? "pipe " + ADDR : "port " + ADDR.port;
  DEBUG("Listening on " + BIND);
}
