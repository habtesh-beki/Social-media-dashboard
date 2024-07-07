const getInstagramData = require('./../config/instagramAuth')


exports.getUserProfile = async(req, res) => {
  try{
    const data = await getInstagramData('me',{fields:'id,username,account_type'})
    res.json(data)
  }catch(err){
   res.status(500).json({
    message:err.message
   })
  }
}

exports.getRecentPost = async(req,res) => {
  try{
    const data = await getInstagramData('me/media',{fields: 'id,caption,media_url,permalink'})
    res.json(data)
  }catch(err){
    res.status(500).json({
        message:err.message
    })
  }
}