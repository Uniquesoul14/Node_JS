const fs = require('fs');

function log(message) {
  const logEntry = `${new Date().toISOString()} - ${message}\n`;
  fs.appendFileSync('log.txt', logEntry);
  console.log(message);
}

module.exports = log;
