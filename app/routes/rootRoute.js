var express = require('express')
var router = express.Router()

const rootController = require('../controllers/rootController.js')

router.get('/', rootController.firstPage)

module.exports = router
