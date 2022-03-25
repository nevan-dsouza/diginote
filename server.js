// Dependancies required for the application:
const express = require('express');
const path = require('path');
const fs = require('fs');

// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

// Port decided by the domain, otherwise use 3001
const port = process.env.PORT || 3001;

// Set up express by assigning it to app
const app = express();

// Middleware to parse through JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


// Route for getting user to notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Route that displays info from db.json (note API data)
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});

// Route for getting user to index page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});