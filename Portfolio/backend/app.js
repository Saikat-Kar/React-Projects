import cookieParser from "cookie-parser";
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  const { email, password } = req.body;

  //   const val = jwt.verify(token, "xxx");
  const temp = jwt.decode(token);
  console.log(temp);
  // const match = bcrypt.compare(password, temp);

  // if (match) {
  //   next();
  // } else {
  //   res.redirect("/login");
  // }

  next();
};

mongoose.connect("mongodb://127.0.0.1:27017/practice");

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.get("/", isAuthenticated, (req, res) => {
  res.status(200).send("Hi");
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  console.log(hash);

  const token = jwt.sign(hash, "xxx");

  res.cookie("token", token, {
    maxAge: 60 * 10000,
    httpOnly: true,
  });

  User.create({ email, password: hash });

  res.status(200).json({
    Succesfull: "true",
    Messege: "Api is working",
  });
});

app.post("/temp", (req, res) => {
  res.send("Working");
});

app.listen(4000, () => {
  console.log("Api is listening at port no 4000");
});
