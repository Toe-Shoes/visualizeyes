const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); //directing path for path__dirname
const PORT = process.env.PORT || 8080;
const app = express();
const dbControllers = require('./mongodb/dbControllers');

app.use(express.static(path.join(__dirname, './../build')));
app.use(bodyParser.urlencoded({ extended: false }));

// Get request to get the database for users
app.get('/app', dbControllers.getDatabase, (req, res) => {
  res.status(200).json(res.locals);
});

//if anything else redifect us to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'build/index.html'));
});

app.listen(process.env.PORT || 8080);












