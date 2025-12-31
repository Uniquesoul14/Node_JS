import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  await User.create({ ...req.body, password: hashed });
  res.json({ message: "User registered" });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.status(400).json({ message: "Invalid credentials" });

  const token = generateToken();
  user.authToken = token;
  await user.save();

  res.cookie("authToken", token, { httpOnly: true });
  res.json({ message: "Login successful" });
};

export const logout = async (req, res) => {
  req.user.authToken = null;
  await req.user.save();
  res.clearCookie("authToken");
  res.json({ message: "Logged out" });
};
