import express from "express";
import path from "path";
const logoutRouter = express.Router();

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
logoutRouter.use(express.urlencoded({ extended: true }));

logoutRouter.get("/", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

export default logoutRouter;