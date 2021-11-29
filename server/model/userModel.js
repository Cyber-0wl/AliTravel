import mongoose from "mongoose";

//instance object (new)
const UserModel = new mongoose.Schema({
  name: String,
  email: {
    type: String,

    unique: true,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = mongoose.model("User", UserModel);

export default User;
