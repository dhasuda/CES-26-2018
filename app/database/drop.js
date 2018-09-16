var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db("nodeData")
  
  dbo.collection("ranks").drop(function(err, delOK) {
    if (err) throw err
    if (delOK) console.log("Ranks collection deleted")
    
    dbo.collection("bizus").drop(function(err, delOK) {
      if (err) throw err
      if (delOK) console.log("Bizus collection deleted")
      
      dbo.collection("users").drop(function(err, delOK) {
        if (err) throw err
        if (delOK) console.log("Users collection deleted")
        db.close()
      })

    })

  })

})
