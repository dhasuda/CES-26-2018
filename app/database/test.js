// const db = require('./db')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"


MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db("nodeData")
  dbo.collection("bizus").find({}).toArray(function(err, result) {
    if (err) throw err
    console.log(result)
    db.close()
  })
})
