const express = require("express");
const router = express.Router();
const path = require("path");
const chats = require("./chats.js");
const login = require("./login.js");
const logout = require("./logout.js");
const signup = require("./signup.js");
const users = require("./users.js");

// const {fileURLToPath} = 'url';
// const __filename = fileURLToPath(const.meta.url);
// const __dirname = path.dirname(__filename);
router.use(express.urlencoded({ extended: true }));

/*Index Page*/
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
/*Routes*/
router.use("/chats", chats);
router.use("/login", login);
router.use("/logout", logout);
router.use("/signup", signup);
router.use("/users", users);
module.exports = router;
