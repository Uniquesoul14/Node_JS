const http = require('http');
const fs = require('fs');
const path = require('path');

// Define port
const PORT = 5000;

// Ensure log directory exists
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Function to log requests
function logRequest(url) {
    const logPath = path.join(logDir, 'server.log');
    const logEntry = `[${new Date().toLocaleString()}] Requested: ${url}\n`;
    fs.appendFile(logPath, logEntry, err => {
        if (err) console.error('Error logging request:', err);
    });
}

// Function to serve HTML files
function servePage(res, filename, contentType = 'text/html') {
    const filePath = path.join(__dirname, 'pages', filename);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

// Create HTTP server
const server = http.createServer((req, res) => {
    logRequest(req.url);

    const route = req.url.toLowerCase();

    if (route === '/' || route === '/index') {
        servePage(res, 'index.html');
    } else if (route === '/about') {
        servePage(res, 'about.html');
    } else if (route === '/contact') {
        servePage(res, 'contact.html');
    } else if (route === '/data') {
        // Bonus: JSON response
        const jsonData = {
            name: 'Soumya',
            project: 'Node.js HTTP Server',
            version: '1.0.0',
            timestamp: new Date().toISOString()
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(jsonData, null, 2));
    } else {
        servePage(res, '404.html');
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
