import User from "../models/User.js";

export const protect = async (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  const user = await User.findOne({ authToken: token });
  if (!user) return res.status(401).json({ message: "Invalid token" });

  req.user = user;
  next();
};
