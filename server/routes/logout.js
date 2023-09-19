const express = require("express");
const path = require("path");
const logoutRouter = express.Router();

// const {fileURLToPath} = require('url');
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
logoutRouter.use(express.urlencoded({ extended: true }));

logoutRouter.get("/", function (req, res, next) {
  console.log(req.user);
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: "successfully logged out" });
  });
});

module.exports = logoutRouter;
