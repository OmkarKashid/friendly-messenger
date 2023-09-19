const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = "../models/User.js";
const loginRouter = express.Router();

// const {fileURLToPath} = require('url');
// const __filename = fileURLToPath(const.meta.url);
// const __dirname = path.dirname(__filename);
loginRouter.use(express.urlencoded({ extended: true }));

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        // passwords do not match!
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

loginRouter.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});
loginRouter.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  function (req, res) {
    res.send(req.user);
  },
);

module.exports = loginRouter;
