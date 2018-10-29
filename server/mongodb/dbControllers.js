const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dbController = {};

//const url = "mongodb://toeshoe:123abc@ds145093.mlab.com:45093/toeshoe";

dbController.getDatabase = (req, res, next) => {
  let url = req.query.url;
  mongoose.connect(
    url,
    { useNewUrlParser: true }
  );
  // Runs this logic once there is an open connection with the database
  mongoose.connection.on("open", () => {
    console.log("We are connected on line 16 to mongoose")
    // Gets all the collections inside our database and turns it into an array
    const coll = mongoose.connection.db.listCollections().toArray();
    // coll returns a promise so we use .then
    //* We need async await here so that we properly saving the documents in our response
    let promArr = [];
    let respArr = [];

    coll.then(
      (collections) => {
        //console.log(collections);
        const modelArr = [];

        
        for (let i = 0; i < collections.length-1; i++) {

          let model = mongoose.model(collections[i].name, new Schema({}), collections[i].name);
          modelArr.push(model);
          
          promArr.push(new Promise((resolve, reject) => {
            model.find({}, (err, response) => {
              // console.log(collections[i].name);
              console.log('promises hit');
              respArr.push(response);
              resolve();
            });
          }));
        }

        Promise.all(promArr)
        .then(() => {
          console.log('all promises complete');
          res.send(respArr);
        })
        .catch(err => {
          console.log(err);
        })

        let modelNames = mongoose.connection.modelNames();
        console.log('modelNames', modelNames);
      }
    )
    

      // .then(async ((collections) => {
      //   try {
      //     // we loop through the collections and use .find to get all the documents in the collection
      //     for (let i = 0; i < collections.length; i++) {
      //       let collectionName = collections[i].name;
            // let modelNames = mongoose.connection.modelNames();
      //       let Collection;

      //       // * Await allows us to properly save our documents
      //       await (Collection.find().then(docs => {
      //         console.log('-----docs----', docs)
      //         res.locals[collectionName] = docs;
      //         delete mongoose.connection.models[collectionName];
      //       }));
      //     }

      //     if(modelNames.indexOf(collectionName) !== -1){
      //       Collection = mongoose.connection.model(collectionName);
      //     }else{
      //       Collection = mongoose.model(collectionName, new Schema({}), collectionName);
      //     } 

      //       // // * Await allows us to properly save our documents
      //       // await Collection.find().then(docs => {
      //       //   console.log("IT REACHES HERE")
      //       //   res.locals[collectionName] = docs;
      //       // });
      //       next();
      //   }
      //   catch (err) { console.log(err); }
      // }))
      .catch(err => console.log("-----CollectionError-----", err));
  });
};

module.exports = dbController;
