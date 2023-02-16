import { Router } from "express";

const ROUTER = Router();

import controllers from "@controller/controller";

ROUTER.get("/", controllers.test);

module.exports = ROUTER;
