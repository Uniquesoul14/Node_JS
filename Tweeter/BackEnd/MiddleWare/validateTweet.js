// Route-level validation for POST and PUT
function isBlank(str) {
  return !str || String(str).trim().length === 0;
}

export function forCreate(req, res, next) {
  const { username, tweet } = req.body;

  if (isBlank(username)) {
    return res.status(400).json({ error: "username is required and cannot be empty" });
  }
  if (isBlank(tweet)) {
    return res.status(400).json({ error: "tweet is required and cannot be empty" });
  }
  if (tweet.trim().length < 5) {
    return res.status(400).json({ error: "tweet must be at least 5 characters" });
  }
  next();
}

export function forUpdate(req, res, next) {
  const { tweet } = req.body;
  if (isBlank(tweet)) {
    return res.status(400).json({ error: "tweet is required and cannot be empty" });
  }
  if (tweet.trim().length < 5) {
    return res.status(400).json({ error: "tweet must be at least 5 characters" });
  }
  next();
}
