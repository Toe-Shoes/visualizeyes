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
    coll.then((collections) => {
      // const collectionSchema = new Schema()
      arr = [];
      collections.forEach((collection) => {
        if(collection.name !== 'system.indexes'){
          const collectionName = collection.name;
          let Collection = mongoose.model(collectionName, new Schema({}), collectionName);
          // console.log(Collection);
          Collection.find({}, (err,docs) => {
            if (err) return new Error(err);
            // console.log(docs)
            // arr.push(docs);
            res.locals.data = docs;
          });
        }
      });
      // res.locals.data = arr;
    })
    .then(() => {
      next();
    });
  });
  console.log(arr);
}

  // dbController.getCollections = (req, res, next) => {
  //   MongoClient.connect(url, (err, client) => {
  //     if(err) throw err;
  //     let db = client.db('violent-hunters');

  //     db.collections((err, collections) => {
  //       console.log('------collections---------', collections);
  //       collections.forEach((collection) => {
  //         const cursor = collection.find(); //creates a cursor
  //         const docs = cursor.toArray();
  //         docs.then((something) => {
  //           console.log(something);
  //         })
  //       })
  //     });

  //     next();
  //   });
  // }




module.exports = dbController;






