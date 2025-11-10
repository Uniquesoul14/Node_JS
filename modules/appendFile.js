const fs = require('fs');

fs.appendFile('example.txt', '\nThis is appended text.', (err) => {
  if (err) throw err;
  console.log('Content appended!');
});
