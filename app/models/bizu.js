var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

var Bizu = (data) => {
    this.data = data
}

Bizu.prototype.data = {}

Bizu.prototype.save = (onSuccess, onError) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodeData");
    
        dbo.collection("bizus").insertOne(data, function(err, res) {
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