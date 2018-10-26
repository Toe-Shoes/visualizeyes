const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://violent-hunters:123abc@ds143143.mlab.com:43143/violent-hunters');

mongoose.connection.once('open', () => {
  console.log('You are connected to MongoDB')
});

// const url = 'mongodb://violent-hunters:123abc@ds143143.mlab.com:43143/violent-hunters'

const catSchema = new Schema({
  id: String,
  name: String,
  color: String,
  gender: String,
  age: Number,
  personality: String
});

const Cat = mongoose.model('Cat', catSchema);

// module.exports = Cat;
















