const axios = require('axios')


const getYouTubeData = async(endpoint , params) => {
 try{
   const response = await axios.get(`https://www.googleapis.com/youtube/v3/${endpoint}`, {
         params:{...params, key: process.env.YOUTUBE_API_KEY}
   })
   return response.data;
 }catch(error){
    console.log(error)
    throw new Error('feching data from youtube is failed')
 }
}

module.exports = getYouTubeData;