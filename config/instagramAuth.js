const axios = require('axios')

getInstagramData = async(endpoint , params) => {
    try{
      const response = await axios.get(`https://graph.instagram.com/${endpoint}`, {
        params:{...params ,access_token:process.env.INSTAGRAM_ACCESS_TOKEN}
      })
      return response.data;
    }catch(error){
     throw new Error('error fetch data')
    }
}

module.exports = getInstagramData;
