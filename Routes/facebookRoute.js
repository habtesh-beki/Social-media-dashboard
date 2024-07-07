const express = require('express')
const facebookController = require('./../Controller/facebookController')
const router = express.Router();

router.get('/profile', facebookController.getUserProfile)
router.get('/posts' , facebookController.getUserPosts)

module.exports = router;