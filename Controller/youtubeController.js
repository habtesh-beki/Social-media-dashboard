const getYouTubeData = require("../config/youtubeAuth")

exports.getChannelInfo = async (req,res) => {
    try{
        const data = await getYouTubeData('channels', {
            part: 'snippet,statistics',
            id: 'UCgbryqWqlIgTJXxW5lgQYDQ'
        });
     res.status(200).json({
    status:'success',
    data:{
        data
    }
  })
    }catch(error){
     res.status(500).json({
        message:'fail',
        message:error.message
     })
  }
}
exports.getRecentVideo = async(req, res) => {
    try{
        const data = await getYouTubeData('search', {
            part: 'snippet',
            channelId: 'UCgbryqWqlIgTJXxW5lgQYDQ',
            order: 'date',
            maxResults: 5
        })
        const videoIds = data.items.map(item => item.id.videoId).join(',');
        const videoData = await getYouTubeData('videos', {
            part: 'snippet,statistics',
            id: videoIds
        });
        res.status(200).json(videoData.items)
    }catch(error){
       res.status(500).json({
        status:'fail',
        message:error.message
       })
    }
}
exports.getRecentComment = async(req, res) => {
        try {
            const data = await getYouTubeData('commentThreads', {
                part: 'snippet',
                videoId: 'ouHOCFm2LNY',
                maxResults: 5
            });
            res.json(data.items);
        } catch (error) {
      res.status(500).send(error.message);
  }
}