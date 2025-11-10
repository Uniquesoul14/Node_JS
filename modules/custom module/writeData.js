const fs = require('fs');

function writeData(filename, data) {
  fs.writeFileSync(filename, data);
  console.log('Data written!');
}
module.exports = writeData;
