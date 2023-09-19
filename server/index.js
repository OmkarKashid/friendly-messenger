const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const model = require("./models/model.js");
const router = require("./routes/router.js");
const app = express();
const port = 5000;

const mongoDb =
  "mongodb+srv://omkark:V1FWj3nPAOLT9wrt@cluster0.mctftos.mongodb.net/friendlyDB?retryWrites=true&w=majority";
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.use(express.json());
app.use(
  cors({
    credentials: true,
  }),
);
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await model.User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use("/", router);
app.post("/registe", (req, res) => {
  res.json(req.body);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server listening on port ${port}`);
});
