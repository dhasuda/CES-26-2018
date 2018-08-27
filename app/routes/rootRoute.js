var express = require('express')
var router = express.Router()

const mongo = require('mongodb')

const rootController = require('../controllers/rootController.js')

router.get('/', rootController.firstPage)
router.get('/register', rootController.registerPage)
router.get('/database', rootController.database)

router.post('/login', rootController.loginUser)
router.post('/login', rootController.renderWelcomePage)
router.post('/register', rootController.registerNewUser)

module.exports = router
