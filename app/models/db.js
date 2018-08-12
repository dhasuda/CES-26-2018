const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/nodeData', { useNewUrlParser: true })

var  userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String
}, {
  collection: 'usercollection'
})

module.exports = { Mongoose: mongoose, UserSchema: userSchema }
