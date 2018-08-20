// const db = require('./db')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

var User = function(data) {
  this.data = data
}

User.prototype.save = (onSuccess, onError) => {

  // const usersDb = db.Mongoose.model('usercollection', db.UserSchema, 'usercollectin')
  // var user = new UsersDb(this.prototype.data)
  // user.save(err => {
  //   if (err) {
  //     console.log('ERROR:', err)
  //     onError(err)
  //   } else {
  //     console.log('User saved!')
  //     onSuccess()
  //   }
  // })

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("nodeData");

    var myobj = {
      username: this.data.username,
      name: this.data.name,
      email: this.data.email,
      password: this.data.password
    }

    dbo.collection("users").insertOne(myobj, function(err, res) {
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
      console.log(result.name)
      db.close()
      onSuccess(result)
    }

  });
});

}

module.exports = User
