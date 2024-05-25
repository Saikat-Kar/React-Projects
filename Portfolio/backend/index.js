import express, { urlencoded } from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/practice-contact-us");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  text: String,
});

const User = mongoose.model("User", userSchema);

app.post("/submit", async (req, res) => {
  const { firstName, lastName, email, text } = req.body;

  let user = new User({
    firstName,
    lastName,
    email,
    text,
  });

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    await user.save();
  }

  res.status(201).json("backend working fine");
});

app.listen(5000, () => {
  console.log("app is listening on port no 5000");
});
