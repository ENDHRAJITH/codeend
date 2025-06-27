// server.js

const express = require('express'); // Import the Express.js library
const app = express();              // Create an Express application instance
const port = 3000;                  // Define the port the server will listen on

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello from Express.js!'); // Send a plain text response
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});