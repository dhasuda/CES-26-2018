const passport = require('passport')
var Bizu = require("../models/bizu")

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


exports.renderAboutUs = (req, res) => {
  console.log(req.user)
  res.render('aboutus.ejs')
}

exports.renderRanking = (req, res) => {
  console.log(req.user)
  res.render('ranking.ejs')
}

exports.renderUpload = (req, res) => {
  console.log(req.user)
  res.render('uploadbizu.ejs')
}

exports.postBizu = (req, res) => {
  console.log(req.user)
  var bizu = new Bizu()
  bizu.data = {
    title: req.body.title,
    text: String,
    subject: String,
    creator: String
  }

  bizu.save(() => {
    
  }, err => {
    console.log(err)
    res.redirect('/')
  })
  
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
