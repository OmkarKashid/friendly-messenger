const express = require("express");
const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get("/", function (req, res, next) {
  res.send("users page");
});

module.exports = usersRouter;
