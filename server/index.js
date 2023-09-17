import express from "express";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import mongoose from 'mongoose';
import model from "./models/model.js";
import router from "./routes/router.js";
const app = express();
const port = 5000;

const mongoDb = "mongodb+srv://omkark:V1FWj3nPAOLT9wrt@cluster0.mctftos.mongodb.net/friendlyDB?retryWrites=true&w=majority";
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  try {
    const user = await model.User.findById(id);
    done(null, user);
  } catch(err) {
    done(err);
  };
});

app.use("/", router);
 

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server listening on port ${port}`);
});