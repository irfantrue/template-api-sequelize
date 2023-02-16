import users from "./users";
import express from "express";

const APP = express();

APP.use("/users", users);

module.exports = APP;
