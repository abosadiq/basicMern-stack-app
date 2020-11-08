import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
});
export const User = mongoose.model("User", userSchema);
