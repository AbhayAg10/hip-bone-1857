const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone, picture } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exits");
  }
  const user = await User.create({
    name,
    email,
    password,
    phone,
    picture,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      phone: user.phone,
      picture: user.picture,
      token:generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});
const logiUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const hashedPassword = await user.matchPassword(password);
  if (user && hashedPassword) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      phone: user.phone,
      picture: user.picture,
      token:generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or password");
  }
});
module.exports = { registerUser, logiUser };
