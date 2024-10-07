const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DATA_DIR = path.join(__dirname, 'data');
const FILE_PATH = path.join(DATA_DIR, 'shopping-list.json');

// Ensure the data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

// Ensure the JSON file exists
if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

// Utility functions
const readFile = () => {
    const data = fs.readFileSync(FILE_PATH);
    return JSON.parse(data);
};

const writeFile = (data) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};

// Create HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    // Handle root route
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Welcome to the Shopping List API!' }));
    } else if (req.method === 'GET' && req.url === '/shopping-list') {
        const shoppingList = readFile();
        res.statusCode = 200;
        res.end(JSON.stringify(shoppingList));
    } else if (req.method === 'POST' && req.url === '/shopping-list') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const newItem = JSON.parse(body);
            const shoppingList = readFile();
            shoppingList.push(newItem);
            writeFile(shoppingList);
            res.statusCode = 201;
            res.end(JSON.stringify({ message: 'Item added', item: newItem }));
        });
    } else if (req.method === 'PUT' && req.url.startsWith('/shopping-list/')) {
        const id = req.url.split('/').pop();
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const updatedItem = JSON.parse(body);
            const shoppingList = readFile();
            const index = shoppingList.findIndex(item => item.id === id);

            if (index !== -1) {
                shoppingList[index] = { ...shoppingList[index], ...updatedItem };
                writeFile(shoppingList);
                res.statusCode = 200;
                res.end(JSON.stringify({ message: 'Item updated', item: shoppingList[index] }));
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({ message: 'Item not found' }));
            }
        });
    } else if (req.method === 'DELETE' && req.url.startsWith('/shopping-list/')) {
        const id = req.url.split('/').pop();
        const shoppingList = readFile();
        const updatedList = shoppingList.filter(item => item.id !== id);

        if (shoppingList.length !== updatedList.length) {
            writeFile(updatedList);
            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'Item deleted' }));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Item not found' }));
        }
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
