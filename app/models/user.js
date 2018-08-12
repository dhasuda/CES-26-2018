const db = require('./db')

var User = data => {
  this.data = data
}

User.prototype.data = {}

User.prototype.save = (onSuccess, onError) => {

  const usersDb = db.Mongoose.model('usercollection', db.UserSchema, 'usercollectin')
  var user = new UsersDb(this.prototype.data)
  user.save(err => {
    if (err) {
      console.log('ERROR:', err)
      onError(err)
    } else {
      console.log('User saved!')
      onSuccess()
    }
  })

}

module.exports User
