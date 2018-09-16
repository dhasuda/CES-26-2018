var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

var Rank = (data) => {
    this.data = data
}

Rank.prototype.save = (data, onSuccess, onError) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("nodeData");
    
        dbo.collection("ranks").insertOne(data, function(err, res) {
          if (err) {
            onError(err)
            throw err
          } else {
            console.log("1 rank inserted");
            db.close()
            onSuccess()
          }
        })
      })
}

module.exports = Rank