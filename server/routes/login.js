import express from "express";
import path from "path";
import bcrypt from "bcryptjs";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "../models/User.js";
const loginRouter = express.Router();

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
loginRouter.use(express.urlencoded({ extended: true }));

passport.use(
  new LocalStrategy(async(username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      };
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        // passwords do not match!
        return done(null, false, { message: "Incorrect password" })
      };
      return done(null, user);
    } catch(err) {
      return done(err);
    };
  })
);


loginRouter.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname,"../public/login.html"));
});
loginRouter.post( "/",
passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
function(req, res) {
  res.send(req.user);
});

export default loginRouter;