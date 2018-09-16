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
  
  var bizu = new Bizu()
  console.log('USER', req.user)
  bizu.data = {
    title: req.body.title,
    text: req.body.text,
    subject: req.body.subject,
    creator: req.user._id
  }

  bizu.save(() => {
    res.render('uploadbizu.ejs')
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
          if (err) { return next(err); }
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
