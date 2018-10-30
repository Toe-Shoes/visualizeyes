const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); //directing path for path__dirname
const PORT = process.env.PORT || 8080;
const app = express();
const dbControllers = require('./mongodb/dbControllers');

app.use(express.static(path.join(__dirname, './../build/webpack-bundle.js')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/getdb', dbControllers.getDatabase);
app.post('/getdb', dbControllers.updateDatabase);



// //if anything else redifect us to index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + 'build/index.html'));
// });

app.listen(8080);












