const passport = require('passport')
var Bizu = require("../models/bizu")
var Rank = require("../models/rank")


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
  
  var arrayBizus
  Bizu.getAll(arrayBizus => {
      // console.log('BIZU', arrayBizus)
      res.render('ranking.ejs', {arrayBizus: arrayBizus})
  }, err => {
      console.log(err)
      res.redirect('/')
  })
}

exports.renderRankScreen = (req, res) => {
  console.log(req.params)
  // res.render('hey.ejs')
  res.render('rankScreen.ejs', {idBizu : req.params.idBizu, nome : req.params.name})
}

exports.renderUpload = (req, res) => {
  console.log(req.user)
  res.render('uploadbizu.ejs')
}

exports.postBizu = (req, res) => {
  
  var data = {
    title: req.body.title,
    text: req.body.text,
    subject: req.body.subject,
    creator: req.user._id
  }
  
  Bizu.save(data, () => {
    res.render('uploadbizu.ejs')
  }, err => {
    console.log(err)
    res.redirect('/')
  })
}

exports.postRank = (req, res) => {
  
  var data = {
    idBizu: req.params.idBizu,
    user: req.user._id,
    grade: req.body.stars
  }
  
  Rank.save(data, () => {
    res.redirect('/ranking')
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

exports.logout = (req, res) => {
  req.logout()
  req.session.destroy(err => {
      res.redirect('/')
  })
}