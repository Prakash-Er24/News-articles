const express = require('express')
const router = express.Router()
const newsCtrl = require('../app/controller/newsCtrl')
const userCtrl = require('../app/controller/userCtrl')
const { authentication } = require('../app/middleware/authentication')

router.get('/api/rss-news-feed/:author',newsCtrl.list)
router.post('/api/user/Register',userCtrl.register)
router.post('/api/user/login',userCtrl.login)
router.get('/api/user',authentication ,userCtrl.read)

module.exports = router