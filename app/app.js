const express = require('express')
const app = express()

const expressSession = require('express-session')

const bodyParser = require('body-parser')

const passport = require('passport')

app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(expressSession({
    secret: 'secret key'
}))

require('./passport/passport.js') (passport)
app.use(passport.initialize())
app.use(passport.session())

app.set('views', './views')

const rootRoute = require('./routes/rootRoute')

app.use('/', rootRoute)


// app.listen(3000)

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});