
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import mailer from "../config/mailer.js";

export const signup = async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await User.create({ email, password: hash, otp });

  await mailer.sendMail({
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is ${otp}`
  });

  res.json({ message: "OTP sent" });
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email, otp });
  if (!user) return res.status(400).json({ message: "Invalid OTP" });
  user.isVerified = true;
  user.otp = null;
  await user.save();
  res.json({ message: "Verified" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, isVerified: true });
  if (!user) return res.status(401).json({ message: "Unauthorized" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};
