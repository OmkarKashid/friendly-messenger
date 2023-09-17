import express from "express";
import path from "path";
const chatsRouter = express.Router();

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
chatsRouter.use(express.urlencoded({ extended: true }));

chatsRouter.get("/", function (req, res, next) {
    // res.sendFile(path.join(__dirname,"../public/chats.html"));
    res.send("hi");
});

export default chatsRouter;