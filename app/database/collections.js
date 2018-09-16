var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db("nodeData")
  dbo.createCollection("users", function(err, res) {
    if (err) throw err
    console.log("Collection created!")
    
    dbo.createCollection("bizus", function(err, res) {
      if (err) throw err
      console.log("Bizus created!")
      
      dbo.createCollection("ranks", function(err, res) {
        if (err) throw err
        console.log("Ranks created!")
        db.close()
      })
    })
  })
})
