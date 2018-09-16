var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

var Bizu = function(data) {
    this.data = data
}

Bizu.prototype = {
    data: {}
}

Bizu.prototype.save = (onSuccess, onError) => {
    console.log('1')
    MongoClient.connect(url, function(err, db) {
        console.log('2')
        if (err) throw err;
        var dbo = db.db("nodeData");
        console.log('3')
        dbo.collection("bizus").insertOne(this.data, function(err, res) {
        console.log('DATA', this.data)
          if (err) {
            console.log('4')
            onError(err)
            throw err
          } else {
            console.log("1 bizu inserted");
            db.close()
            onSuccess()
          }
        })
      })
}

Bizu.getAll = (onSuccess, onError) => {
    if (err) {
        onError(err)
        throw err
    }
    var dbo = db.db("mydb");
    dbo.collection("bizus").find({}).toArray(function(err, result) {
    if (err) {
        onError(err)
        throw err
    }
    console.log(result);
    onSuccess(result)
    db.close();
  });
}

Bizu.getBycreator = (creator, onSuccess, onError) => {
    if (err) {
        onError(err)
        throw err
    }
    var dbo = db.db("mydb");
    var query = { creator: creator }

    dbo.collection("bizus").find(query).toArray(function(err, result) {
    if (err) {
        onError(err)
    }
    console.log(result);
    onSuccess(result)
    db.close();
  });
}

Bizu.getBySubject = (subject, onSuccess, onError) => {
    if (err) {
        onError(err)
        throw err
    }
    var dbo = db.db("mydb");
    var query = { subject: subject }

    dbo.collection("bizus").find(query).toArray(function(err, result) {
    if (err) {
        onError(err)
    }
    console.log(result);
    onSuccess(result)
    db.close();
  });
}

Bizu.getAllWithRanks = (onSuccess, onError) => {
    if (err) {
        onError(err)
        throw err
    }
    var dbo = db.db("mydb");

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
        onSuccess(res)
        db.close()
    })
}

module.exports = Bizu