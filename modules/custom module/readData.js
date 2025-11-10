const fs = require('fs');

function readData(filename) {
  const data = fs.readFileSync(filename, 'utf8');
  console.log('Data read:', data);
}
module.exports = readData;
