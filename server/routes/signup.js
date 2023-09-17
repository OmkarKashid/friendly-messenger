import express from "express";
import bcrypt from "bcryptjs";
import path from "path";
import User from "../models/User.js";
const signupRouter = express.Router();

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
signupRouter.use(express.urlencoded({ extended: true }));


signupRouter.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname,"../public/signup.html"));
});
signupRouter.post("/", async (req, res, next) => {
  try {
    await bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      // if err, do something
      if(err){
        res.send(err);
      }
      // otherwise, store hashedPassword in DB
      const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        account_created : Date.now(),
        image : null
      });
      const result = await user.save();
      res.redirect("/");
    });
   
  } catch(err) {
    res.send(err);
  };});

export default signupRouter;