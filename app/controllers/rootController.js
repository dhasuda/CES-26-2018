exports.firstPage = (req, res) => {
  res.send('Hello, world')
}

exports.database = (req, res) => {
  var db = require('../models/db')
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollections')
  Users.find({}).lean().exec((err, docs) => {
    console.log(err)
    res.send(docs)
  })
}
