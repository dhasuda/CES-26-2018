const bCrypt = require('bcrypt-nodejs')
const LocalStrategy = require('passport-local')
const User = require('../models/user')

module.exports = function(passport) {

  passport.use('newUser', new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback : true
    }, (req, username, password, done) => {

      var data = {
        username: username,
        name: req.body.name,
        email: req.body.email,
        password: generateHash(password)
      }

      User.save(data, () => {
        return done(null, data)
      }, err => {
        return done(err)
      })
    }))

    passport.use('user', new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback : true
      }, (req, username, password, done) => {
        User.findByUsername(username, result => {
          if (bCrypt.compareSync(req.body.password, result[0].password)) {
            done (null, result[0])
          } else {
            done(null)
          }
        }, err => {
          done(err)
        })
      }))


      passport.serializeUser((user, done) => {
        return done (null, user)
          // if (user.id_pedagogico) {
          //     const data = {
          //         id: user.id_pedagogico,
          //         role: 2
          //     }
          //     done(null, data)
          // } else if (user.id_corretor) {
          //     const data = {
          //         id: user.id_corretor,
          //         role: 1
          //     }
          //     done(null, data)
          // } else if (user.rm_aluno) {
          //     const data = {
          //         id: user.rm_aluno,
          //         role: 3
          //     }
          //     done(null, data)
          // } else if (user.rm_coordenador) {
          //     const data = {
          //         id: user.rm_coordenador,
          //         role: 0
          //     }
          //     done(null, data)
          // } else {
          //     done(null, user.id)
          // }
      })

      passport.deserializeUser((user, done) => {
        done(null, user)
          // if (user.role == 0) { // Coordenador
          //     Coordenador.findById(user.id, (result) => {
          //         done(null, result.recordsets[0])
          //     }, (err) => {
          //         done(err)
          //     })
          // } else if (user.role ==1) { // Corretor
          //     Corretor.findById(user.id, (result) => {
          //         done(null, result.recordsets[0])
          //     }, (err) => {
          //         done(err)
          //     })
          // } else if (user.role == 2) { // Pedagogico
          //     Pedagogico.findById(user.id, (result) => {
          //         done(null, result.recordsets[0])
          //     }, (err) => {
          //         done(err)
          //     })
          // } else if (user.role == 3) { // Aluno
          //     Aluno.findById(user.id, (result) => {
          //         done(null, result.recordsets[0])
          //     }, (err) => {
          //         done(err)
          //     })
          // }
          // else {
          //     done(null, 1)
          // }
      })

}

function generateHash(rawString) {
  return bCrypt.hashSync(rawString)
}
