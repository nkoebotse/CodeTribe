const http = require('http');

// Create HTTP server and define request handler
const server = http.createServer((req, res) => {
    // Set response header
    res.setHeader('Content-Type', 'text/plain');
    
    // Handle routes
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('Welcome to the Node.js server!');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('This is the about page.');
    } else {
        res.statusCode = 404;
        res.end('Page not found.');
    }
});

// Start server and listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
