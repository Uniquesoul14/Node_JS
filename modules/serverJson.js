const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello, this is JSON data!' }));
});

server.listen(3000, () => console.log('JSON server running on port 3000'));
