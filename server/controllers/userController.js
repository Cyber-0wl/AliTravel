import User from "../model/userModel.js";
import generateToken from "../utils/token.js";
import validator from "../utils/validation.js";
import argon2 from "argon2";

const userSignUp = async (req, res) => {
  const errors = validator(req.body);
  if (errors.length > 0) return res.json(errors);

  // hash password
  const hashedPassword = await argon2.hash(req.body.password);
  console.log("Ali", req.body);
  // check if user already exists
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(400).json({ msg: "the user already exist" });
    } else {
      const user = new User(req.body);
      user.password = hashedPassword;
      const savedUser = await user.save();

      const token = generateToken(savedUser);

      const userResponse = {
        name: savedUser.name,
        email: savedUser.email,
        id: savedUser._id,
        isAdmin: savedUser.isAdmin,
        token,
      };
      return res
        .status(201)
        .json({ user: userResponse, msg: "the user saved successfully" });
    }
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
};

const userSignIn = async (req, res) => {
  // console.log(req.body);
  // const { email, password } = req.body.credentials;
  const { email, password } = req.body;

  console.log("ali", req.body);
  try {
    const user = await User.findOne({ email });
    // check if the user email exist
    if (user && (await argon2.verify(user.password, password))) {
      res.status(200).json({ user: user, token: generateToken(user._id) });
    } else {
      return res.status(400).json({ msg: "invalid credentials" });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

export { userSignUp, userSignIn };
