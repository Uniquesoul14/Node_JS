// Create a server that writes the current date and time in a file every time a GET request is received.
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  const now = new Date().toLocaleString();
  
  fs.appendFile('requests.txt', `Request received at: ${now}\n`, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).send('Error logging request');
    }
    res.send('Date and time logged!');
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
