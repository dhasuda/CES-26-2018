// const db = require('./db')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"


MongoClient.connect(url, function(err, db) {
  if (err) {
    throw err
}
var dbo = db.db("nodeData");

dbo.collection("bizus").aggregate([
    { $lookup:
        {
            from: 'ranks',
            localField: '_id',
            foreignField: 'idBizu',
            as: 'ranks'
        }
    }
]).toArray(function(err, res) {
    if (err) {
        onError(err)
        throw err
    }
    console.log(res)
    db.close()
})
})
