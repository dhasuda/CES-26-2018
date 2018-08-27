const passport = require('passport')

exports.firstPage = (req, res) => {
  // res.send('Hello, world')
  res.render('login.ejs')
}

exports.database = (req, res) => {
  var db = require('../models/db')
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollections')
  Users.find({}).lean().exec((err, docs) => {
    console.log(err)
    res.send(docs)
  })
}

exports.registerPage = (req, res) => {
  res.render('register.ejs')
}

exports.renderWelcomePage = (req, res) => {
  console.log(req.user)
  res.render('welcome.ejs', {user: req.user})
}

exports.loginUser = (req, res, next) => {

  passport.authenticate('user', (err, user, info) => {
    if (err) { return res.send('banco'); }
        if (!user) { return res.send('info'); }
        req.login(user, (err) => {
          console.log('2')
          if (err) { return next(err); }
          console.log('here')
          return next()
        })
    })(req, res, next);

}

exports.registerNewUser = (req, res, next) => {

  passport.authenticate('newUser', (err, user, info) => {
    if (err) { return res.send('banco'); }
        if (!user) { return res.send('info'); }
        req.login(user, (err) => {
          if (err) { return next(err); }
          return res.send('aluno')
        })
    })(req, res, next);
}
