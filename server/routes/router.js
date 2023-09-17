import express from "express";
const router = express.Router();
import path from "path";
import chats from "./chats.js";
import login from "./login.js";
import logout from "./logout.js";
import signup from "./signup.js";
import users from "./users.js";

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
router.use(express.urlencoded({ extended: true }));

/*Index Page*/
router.get("/",  function (req, res, next) {
    res.sendFile(path.join(__dirname,"../public/index.html"));
});
/*Routes*/
router.use("/chats", chats);
router.use("/login", login);
router.use("/logout", logout);
router.use("/signup", signup);
router.use("/users", users);
export default router;