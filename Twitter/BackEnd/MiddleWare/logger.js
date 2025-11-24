export function logger(req, res, next) {
  const time = new Date().toLocaleTimeString("en-IN");
  console.log(`${req.method} ${req.originalUrl}  ${time}`);
  next();
}
