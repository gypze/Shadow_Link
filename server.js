// Purpose: This file is the entry point for the server. It connects to the database and starts the server.


const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const routes = require('./routes'); // import routes


const app = express(); // create an express server
const PORT = process.env.PORT || 3001; // set the port to 3001 or the environment variable PORT

app.use(express.json());  
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data, parse
// meaning to break down the incoming data into a format that the server can read, which is a JSON format
app.use(routes); // add routes, which is the import from the routes folder, to the app


mongoose.connect('mongodb://localhost/socialDB') // connect to the socialDB database on the local machine
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))) // if the connection is successful, start the server
.catch((err) => console.error('Connection error', err)); // if the connection is unsuccessful, log the error