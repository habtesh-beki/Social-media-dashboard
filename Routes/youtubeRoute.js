const express = require('express')
const youTubeController = require('./../Controller/youtubeController')
const router = express.Router();

router.get('/channel', youTubeController.getChannelInfo)
router.get('/comment' ,youTubeController.getRecentComment)
router.get('/video' , youTubeController.getRecentVideo)

module.exports = router;