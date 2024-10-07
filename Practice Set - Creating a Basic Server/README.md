# Node.js Practice Set - Creating a Basic Server

This project demonstrates how to create a basic Node.js server using the built-in `http` module. The server handles basic requests, defines routes, and includes error handling. Follow the steps below to set up, run, and test the server.

## Table of Contents

- [Requirements](#requirements)
- [Setup and Installation](#setup-and-installation)
- [How to Run the Server](#how-to-run-the-server)
- [Routes](#routes)
- [Testing the Server](#testing-the-server)
- [Error Handling](#error-handling)
- [License](#license)

## Requirements

- [Node.js](https://nodejs.org) installed on your machine.
- Familiarity with basic JavaScript and Node.js concepts.

## Setup and Installation

1. **Install Node.js**  
   Download and install Node.js from [nodejs.org](https://nodejs.org/en/download/). Verify the installation by running the following commands in your terminal:

   ```bash
   node -v
   npm -v




How to Run the Server
Start the Server
Open a terminal in the project directory (where server.js is located) and run the following command to start the server:

bash
Copy code
node server.js
Server Output
Once the server starts, you should see the following message in the terminal:

arduino
Copy code
Server is running on http://localhost:3000
Stop the Server
To stop the server, press Ctrl + C in the terminal where the server is running.

Routes
The server defines the following basic routes:

Method	Route	Description
GET	/	Responds with a welcome message.
GET	/about	Responds with an "about page" message.
Other	Any other route will return a 404 error and "Page not found" message.	
Testing the Server
You can test the server by using a browser, curl, or a tool like Postman.

Using a Browser
Open a browser and visit the following URLs to test the routes:

http://localhost:3000/ for the welcome message.
http://localhost:3000/about for the about page.
Try other URLs like http://localhost:3000/unknown to test the 404 error.
Using curl
Run the following commands in your terminal to test the server responses:

bash
Copy code
curl http://localhost:3000/
curl http://localhost:3000/about
curl http://localhost:3000/unknown
Using Postman
If you prefer a graphical interface, download Postman to send HTTP requests and view the responses from the server.

Error Handling
The server includes basic error handling for invalid routes:

404 Error: If a user tries to access a route that isn't defined (e.g., /unknown), the server responds with a 404 status code and a "Page not found" message.
General Error Handling: The server is designed to handle basic request/response cycles and ensures the appropriate status codes are returned for different situations.
License