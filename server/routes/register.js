const express = require("express");
const bcrypt = require("bcryptjs");
const path = require("path");
const User = require("../models/User.js");
const registerRouter = express.Router();

// const {fileURLToPath} = require() 'url';
// const __filename = fileURLToPath(const.meta.url);
// const __dirname = path.dirname(__filename);
registerRouter.use(express.urlencoded({ extended: true }));

// signupRouter.get("/", function (req, res, next) {
//   res.sendFile(path.join(__dirname, "../public/signup.html"));
// });
registerRouter.post("/", async (req, res, next) => {
  try {
    await bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      // if err, do something
      if (err) {
        res.send(err);
      }
      // otherwise, store hashedPassword in DB
      const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        account_created: Date.now(),
        image: null,
      });
      const result = await user.save();
      res.status(200).send(result);
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = registerRouter;
