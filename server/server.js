const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); //directing path for path__dirname
const PORT = process.env.PORT || 8080;
const app = express();
// const mongodb = require('./mongodb/mongodb.js');

// let db;
// db = mongoose.connect('mongodb://violent-hunters:123abc@ds143143.mlab.com:43143/violent-hunters', (err, database) => {
//   db = database;
// });


app.use(bodyParser.json()); // returns middleware that parses our json for us.
app.use(bodyParser.urlencoded({ extended: false })); //dealing with nested objects = true, deal with arrays and simple shallow parsing false.
/*
extended: true, then you can parse nested objects, or generally any type. However, if you set  extended: false, then you can only parse strings or arrays
*/

// app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.status(200).json({
    Message: 'Greetings this is the Violent Hunters Server Side',
    Team: 'Violent Hunters'
  });
});

app.get('/app', (req, res) => {
  db.collection('Cat')
})

//if anything else redifect us to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'build/index.html'));
});

app.listen(process.env.PORT || 8080);
