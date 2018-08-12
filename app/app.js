const express = require('express')
const app = express()

const passport = require('passport')

require('./passport/passport.js') (passport)
app.use(passport.initialize())
app.use(passport.session())

const rootRoute = require('./routes/rootRoute')

app.use('/', rootRoute)


app.listen(3000)
