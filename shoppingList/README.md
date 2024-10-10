Shopping List API
A simple RESTful API built using Node.js and the built-in http module to manage a shopping list. The API allows users to perform basic CRUD (Create, Read, Update, Delete) operations on shopping list items and uses JSON data exchange.

Features
Add new shopping list items
Retrieve all or individual shopping list items
Update existing shopping list items
Delete items from the shopping list
Basic validation and error handling
Prerequisites
Node.js (version 14 or above)


Run the Application Start the Node.js server:


node server.js
The server will start on http://localhost:3000.

API Endpoints
Base URL
bash
Copy code
http://localhost:3000/shopping-list
Endpoints
GET /shopping-list

Retrieves the entire shopping list.
Response: JSON array of shopping list items.