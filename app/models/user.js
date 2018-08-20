// const db = require('./db')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

var User = function(data) {
  this.data = data
}

User.save = (data, onSuccess, onError) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeData");

    dbo.collection("users").insertOne(data, function(err, res) {
      if (err) {
        onError(err)
      } else {
        console.log("1 user inserted");
        db.close()
        onSuccess()
      }
    })
  })

}

User.findByUsername = (username, onSuccess, onError) => {

  MongoClient.connect(url, function(err, db) {
    if (err) {
      onError(err)
    }
    var dbo = db.db("nodeData")
    dbo.collection("users").find({}, { username: username }).toArray(function(err, result) {
      if (err) {
        onError(err)
      } else {
        db.close()
        onSuccess(result)
      }

    });
  });

}

module.exports = User
