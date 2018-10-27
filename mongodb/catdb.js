//declare constant MongoClient
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbController = {};

const url = 'mongodb://violent-hunters:123abc@ds143143.mlab.com:43143/violent-hunters';

dbController.getCollections = (req, res, next) => {
  mongoose.connect(url, { useNewUrlParser: true });
  let arr;

  mongoose.connection.on('open', () => {
    console.log('Connected with MongoDB ORM');
    const coll = mongoose.connection.db.listCollections().toArray();
    coll.then(async(collections) => {
      console.log("--------COLLECTIONS---------", collections);

      for (let i = 0; i < collections.length; i++) {
        const collectionName = collections[i].name;
        console.log("----HERE-----", collectionName);
        let Collection = mongoose.model(collectionName, new Schema({}), collectionName);
        console.log("---THERE---", Collection);
        await Collection.find()
          .then((docs) => {
            res.locals[collectionName] = docs;
          });
      }

      next();
    });
  });
}

module.exports = dbController;






