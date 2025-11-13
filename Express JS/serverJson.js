//Create a server that returns JSON data when accessed from the browser.

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello, this is JSON data!' });
});

app.listen(3000, () => {
  console.log('JSON server running on port 3000');
});