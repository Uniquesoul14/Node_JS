const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Ensure log directory exists
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Middleware to log every request
app.use((req, res, next) => {
  const logPath = path.join(logDir, 'server.log');
  const logEntry = `[${new Date().toLocaleString()}] Requested: ${req.url}\n`;
  fs.appendFile(logPath, logEntry, err => {
    if (err) console.error('Error logging request:', err);
  });
  next(); // Continue to next middleware/route
});

// Serve static HTML pages from the "pages" folder
app.use(express.static(path.join(__dirname, 'pages')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.get('/data', (req, res) => {
  res.json({
    name: 'Soumya',
    project: 'Node.js Express Server',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Handle 404 for undefined routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'pages', '404.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
