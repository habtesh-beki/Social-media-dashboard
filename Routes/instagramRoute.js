const express = require('express')
const instagramController = require('./../Controller/instagramController')

const router = express.Router();

router.get('/me', instagramController.getUserProfile)
router.get('/posts' ,instagramController.getRecentPost)


module.exports = router;