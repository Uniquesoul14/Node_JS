const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const now = new Date().toLocaleString();
  fs.appendFile('requests.txt', `Request received at: ${now}\n`, (err) => {
    if (err) throw err;
  });
  res.end('Date and time logged!');
});

server.listen(3000, () => console.log('Server running on port 3000'));
