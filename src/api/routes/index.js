import users from "./users";
import { Router } from "express";

const ROUTE = Router();

ROUTE.get("/", async (req, res) => {
  res.json({
    status: true,
    date: new Date(),
    message: "Irfan Nurul Susilo Open Api 1.0",
  });
});

ROUTE.use("/users", users);

module.exports = ROUTE;
