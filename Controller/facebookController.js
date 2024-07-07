const getFacebookData = require('./../config/facebookAuth')

exports.getUserProfile = async(req, res) => {
  try{
   const data = await getFacebookData('me' , {fields:'id,name,email'})
   res.status(200).json({
    status:'success',
    data:[
        data
    ]
   })
  }catch(err){
    res.status(500).json({
        message:err.message
    })
  }
}

exports.getUserPosts = async(req,res) => {
    try{
          const data = await getFacebookData('me/posts', {fields: 'id,message,created_time'})
          res.status(200).json({
            status:'success',
            data:{
                data
            }
          })
    }catch(err){
    res.status(500).json({
        status:'fail',
        message:err.message
    })
    }
}