# File Manager and Shopping List API

This project combines a basic file management system with a REST API for managing a shopping list. The application is built using Node.js, leveraging its file system capabilities to store shopping list data in JSON format. It exposes CRUD operations via HTTP endpoints to manage the shopping list.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [File Manager Functionality](#file-manager-functionality)
- [Shopping List API Endpoints](#shopping-list-api-endpoints)
- [How to Run](#how-to-run)
- [Testing](#testing)
- [Error Handling](#error-handling)
- [Possible Enhancements](#possible-enhancements)
- [License](#license)

## Features

### File Manager
- **Create Directory:** Dynamically create a new directory for storing the shopping list.
- **Create File:** Create a JSON file within the directory to store shopping list items.
- **Read and Update File:** Read from and update the JSON file with new shopping list data.

### Shopping List API
- **GET /shopping-list**: Retrieve the current shopping list.
- **POST /shopping-list**: Add a new item to the shopping list.
- **PUT /shopping-list/:id**: Update an existing shopping list item by ID.
- **DELETE /shopping-list/:id**: Remove an item from the shopping list by ID.

## Requirements

- **Node.js** (version 12 or higher)
- **File System Module**: To manage file creation, reading, and updating.
- **HTTP Module**: To create the REST API endpoints.
- **Postman** or **curl** for testing API endpoints.

## Setup Instructions

1. **Clone the Repository**  
   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/shopping-list-api.git
   cd shopping-list-api
Install Dependencies
Install the required dependencies (if any):

bash
Copy code
npm install
Create the Necessary Directory and File
The application will create the directory and JSON file dynamically if they don't already exist.

File Manager Functionality
Create Directory:
The application will create a directory (e.g., data) if it doesn't already exist.

Create JSON File:
A shopping-list.json file is created in the directory to store the shopping list.

Read and Update JSON File:

The application reads from the JSON file to retrieve the shopping list.
New items can be added, and existing items can be updated or removed by modifying this file.

Memory updated
Here’s a README for your File Manager and Shopping List API project:

markdown
Copy code
# File Manager and Shopping List API

This project combines a basic file management system with a REST API for managing a shopping list. The application is built using Node.js, leveraging its file system capabilities to store shopping list data in JSON format. It exposes CRUD operations via HTTP endpoints to manage the shopping list.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [File Manager Functionality](#file-manager-functionality)
- [Shopping List API Endpoints](#shopping-list-api-endpoints)
- [How to Run](#how-to-run)
- [Testing](#testing)
- [Error Handling](#error-handling)
- [Possible Enhancements](#possible-enhancements)
- [License](#license)

## Features

### File Manager
- **Create Directory:** Dynamically create a new directory for storing the shopping list.
- **Create File:** Create a JSON file within the directory to store shopping list items.
- **Read and Update File:** Read from and update the JSON file with new shopping list data.

### Shopping List API
- **GET /shopping-list**: Retrieve the current shopping list.
- **POST /shopping-list**: Add a new item to the shopping list.
- **PUT /shopping-list/:id**: Update an existing shopping list item by ID.
- **DELETE /shopping-list/:id**: Remove an item from the shopping list by ID.

## Requirements

- **Node.js** (version 12 or higher)
- **File System Module**: To manage file creation, reading, and updating.
- **HTTP Module**: To create the REST API endpoints.
- **Postman** or **curl** for testing API endpoints.

## Setup Instructions

1. **Clone the Repository**  
   Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/shopping-list-api.git
   cd shopping-list-api
Install Dependencies
Install the required dependencies (if any):

bash
Copy code
npm install
Create the Necessary Directory and File
The application will create the directory and JSON file dynamically if they don't already exist.

File Manager Functionality
Create Directory:
The application will create a directory (e.g., data) if it doesn't already exist.

Create JSON File:
A shopping-list.json file is created in the directory to store the shopping list.

Read and Update JSON File:

The application reads from the JSON file to retrieve the shopping list.
New items can be added, and existing items can be updated or removed by modifying this file.
Shopping List API Endpoints
GET /shopping-list
Retrieves the current shopping list.
Response: JSON array of shopping list items.
POST /shopping-list
Adds a new item to the shopping list.
Request Body:
json
Copy code
{
  "item": "Milk",
  "quantity": 2
}
Response: Confirmation of the item added.
PUT /shopping-list/:id
Updates an existing shopping list item by ID.
Request Body:
json
Copy code
{
  "item": "Milk",
  "quantity": 3
}
Response: Confirmation of the updated item.
DELETE /shopping-list/:id
Deletes an item from the shopping list by ID.
Response: Confirmation of the item deleted.
How to Run
Run the Application
Start the server by running the following command:


node server.js
Access the API
The API will be accessible at http://localhost:3000. You can use Postman or curl to test the endpoints.

Testing
Use tools like Postman or curl to test the API endpoints:

GET:

curl http://localhost:3000/shopping-list
POST:
Use Postman or curl to send a POST request with a JSON body to add a new shopping list item.

PUT:
Test updating an item by sending a PUT request to /shopping-list/:id with the item data.

DELETE:
Use Postman or curl to send a DELETE request to remove an item by its ID.
