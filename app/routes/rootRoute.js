var express = require('express')
var router = express.Router()

const mongo = require('mongodb')

const rootController = require('../controllers/rootController.js')

router.get('/', rootController.firstPage)
router.get('/register', rootController.registerPage)
router.get('/database', rootController.database)
router.get('/aboutus', rootController.renderAboutUs)
router.get('/ranking', rootController.renderRanking)
router.get('/uploadbizu', rootController.renderUpload)
router.get("/rankbizu/:idBizu", rootController.renderRankScreen)


router.post('/login', rootController.loginUser)
router.post('/login', rootController.renderWelcomePage)
router.post('/register', rootController.registerNewUser)
router.post('/postbizu', rootController.postBizu)
router.post('/postrank/:idBizu', rootController.postRank)

module.exports = router
