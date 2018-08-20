const bCrypt = require('bcrypt-nodejs')
const LocalStrategy = require('passport-local')
const User = require('../models/user')

module.exports = function(passport) {

  passport.use('newUser', new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    }, newUserCallback ))

    passport.use('user', new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password'
      }, loginCallback ))

}

function newUserCallback(req, username, password, done) {

  var data = {
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: generateHash(req.body.password)
  }

  var user = new User(data)
  user.save(() => {
    done(null, user)
  }, err => {
    done(err)
  })

}

function generateHash(rawString) {
  return bCrypt.hashSync(rawString)
}

function loginCallback(req, username, password, done) {

  User.findByUsername(username, result => {
    if bCrypt.compareSync(password, result.password) {
      done (null, result)
    } else {
      done(null)
    }
  }, err => {
    done(err)
  })

}
