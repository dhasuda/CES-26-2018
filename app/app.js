const express = require('express')
const app = express()

const rootRoute = require('./routes/rootRoute')

app.use('/', rootRoute)


app.listen(3000)
