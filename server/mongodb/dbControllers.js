const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dbController = {};

//const url = "mongodb://toeshoe:123abc@ds145093.mlab.com:45093/toeshoe";

dbController.getDatabase = (req, res, next) => {
  let url = req.query.url;
  mongoose.connect(
    url,
    { useNewUrlParser: true },
    (err) => {
      if (err){
        res.header(500);
        res.send({
          ConnectionError: 'Invalid Connection URL'
        });
        return;
      }
    }
  );
  // Runs this logic once there is an open connection with the database
  mongoose.connection.on("open", () => {
    console.log("We are connected on line 16 to mongoose")
    // Gets all the collections inside our database and turns it into an array
    const coll = mongoose.connection.db.listCollections().toArray();
    let promArr = [];
    let respArr = [];

    coll.then(
      (collections) => {
        //console.log(collections);
        const modelArr = [];
        
        for (let i = 0; i < collections.length-1; i++) {

          let modelNames = mongoose.connection.modelNames();
          let model;
          
          if(!modelNames.includes(collections[i].name)){
            model = mongoose.model(collections[i].name, new Schema({}), collections[i].name);
            modelArr.push(model);
          } else {
            model = mongoose.models[Object.keys(mongoose.models)[i]];
          }

          //console.log(mongoose.models);
          promArr.push(new Promise((resolve, reject) => {
            model.find({}, (err, response) => {
              // console.log(collections[i].name);
              console.log('promises hit');
              respArr.push({
                collectionName : collections[i].name,
                response : response,
              });
              resolve();
            });
          }));
        }

        Promise.all(promArr)
        .then(() => {
          console.log('all promises complete');
          res.send(respArr);
          mongoose.connection.close();
          console.log('ConnectionClosed');
        })
        .catch(err => {
          console.log(err);
        })
      }
    )
      .catch(err => console.log("-----CollectionError-----", err));
  });
};

module.exports = dbController;
