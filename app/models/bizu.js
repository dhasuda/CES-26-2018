var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

var Bizu = (data) => {
    this.data = data
}

Bizu.prototype.data = {}

Bizu.prototype.save = (onSuccess, onError) => {
    
}