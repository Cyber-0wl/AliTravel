import express from "express";
import User from "../model/userModel.js";

const protect = async (req, res, next) => {
  
  const admin = await User.findById(req.user.id);
  console.log("A", admin);
  if (admin.isAdmin === true) {
    return next();
  } else {
    res.send({ message: "you are not an admin" });
  }
};

export default protect;
