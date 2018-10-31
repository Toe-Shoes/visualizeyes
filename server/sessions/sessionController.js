const mongoose = require("mongoose");

userPreviousSessions = [];

const sessionController = {};
sessionController.addConnection = (req, res, next) => {
  let url = req.body.url;
  let userName = req.body.userName;

  //find existing user object or create if does not...
  let userObject;
  userPreviousSessions.forEach(userObj => {
    if (userObj.userName === userName){
      userObject = userObj;
    }
  })
  if (!userObject) {
    userObject = {
      userName : userName,
      urls : [],
    }
    userPreviousSessions.push(userObject);
  }

  if(!userObject.urls.includes(url)){
    userObject.urls.push(url);
  }
  
  res.send(JSON.stringify(userObject));
}

sessionController.getConnections = (req, res, next) => {
  let userName = req.query.userName;
  let userObject;
  userPreviousSessions.forEach(userObj => {
    if (userObj.userName === userName){
      userObject = userObj;
    }
  })
  if (!userObject) {
    userObject = {
      userName : userName,
      urls : [],
    }
    userPreviousSessions.push(userObject);
  }

  res.send(JSON.stringify(userObject));
}
module.exports = sessionController;
