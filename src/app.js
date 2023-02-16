import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
require("dotenv").config();

import indexRoute from "@route";
import { notFoundHandler } from "@middleware/notFound.handler";
import { errorHandler } from "@middleware/error.handler";

const APP = express();

APP.use(logger("dev"));
APP.use(express.json());
APP.use(express.urlencoded({ extended: false }));
APP.use(cookieParser());
APP.use(cors());
APP.use(express.static(path.join(__dirname, "public")));

APP.use("/api/v1", indexRoute);
APP.use(errorHandler);
APP.use(notFoundHandler);

module.exports = APP;
