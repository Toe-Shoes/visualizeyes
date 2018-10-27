const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dbController = {};

// const url =
//   "mongodb://violent-hunters:123abc@ds143143.mlab.com:43143/violent-hunters";

dbController.getDatabase = (req, res, next) => {
  let url = req.query.url;
  mongoose.connect(
    url,
    { useNewUrlParser: true }
  );
  // Runs this logic once there is an open connection with the database
  mongoose.connection.on("open", () => {
    // Gets all the collections inside our database and turns it into an array
    const coll = mongoose.connection.db.listCollections().toArray();
    // coll returns a promise so we use .then
    //* We need async await here so that we properly saving the documents in our response
    coll
      .then( async collections => {
        // we loop through the collections and use .find to get all the documents in the collection
        for (let i = 0; i < collections.length; i++) {
          // console.log("----Collections----");
          // console.log(collections[i]);
          let collectionName = collections[i].name;
          // * Crashing
          let Collection = mongoose.model(collectionName, new Schema({}), collectionName);
          // *Crashing

          // * Await allows us to properly save our documents
          await Collection.find().then(docs => {
            console.log('-----docs----', docs)
            res.locals[collectionName] = docs;
            delete mongoose.connection.models[collectionName];
          });
        }

        mongoose.connection.close();
        next();
      })
      .catch(err => console.log("-----CollectionError-----", err));
  });
};

module.exports = dbController;
