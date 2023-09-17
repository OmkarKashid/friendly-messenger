const express = require("express");
const path = require("path");
const chatsRouter = express.Router();

chatsRouter.use(express.urlencoded({ extended: true }));

chatsRouter.get("/", function (req, res, next) {
  // res.sendFile(path.join(__dirname,"../public/chats.html"));
  res.send("hi");
});

module.exports = chatsRouter;
