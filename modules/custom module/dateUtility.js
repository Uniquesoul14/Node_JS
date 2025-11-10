function getDate() {
  return new Date().toLocaleDateString();
}
function getTime() {
  return new Date().toLocaleTimeString();
}
module.exports = { getDate, getTime };
