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

