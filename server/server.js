const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); //directing path for path__dirname
const PORT = process.env.PORT || 8080;
const app = express();
const dbController = require('../mongodb/catdb');



// let db;
// db = mongoose.connect('mongodb://violent-hunters:123abc@ds143143.mlab.com:43143/violent-hunters', (err, database) => {
//   console.log(database,'DATABASE')
//   db = database;
// });

// mongoose.connection.once('open', () => {
//   console.log('You are connected to MongoDB')
// });



app.use(bodyParser.json()); // returns middleware that parses our json for us.
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  console.log(dbController, 'this is dbcontroller-------------');
  res.status(200).json({
    Message: 'Greetings this is the Violent Hunters Server Side',
    Team: 'Violent Hunters'
  });
});

app.get('/app', dbController.getCollections, (req, res) => {
  console.log(res.locals, '-------RES!!!!!!!!!!-------')
  // res.status(200).json({
  //   Message: 'Your M-Lab Data should be here',
  //   data: res.locals.data
  // });

  res.send(res.locals);
});

//if anything else redifect us to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'build/index.html'));
});

app.listen(process.env.PORT || 8080);












