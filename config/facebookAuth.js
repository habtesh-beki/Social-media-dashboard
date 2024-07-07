const axios = require('axios')

const getFacebookData = async (endpoint, params) => {
    try{
      const response = await axios.get(`https://graph.facebook.com/v12.0/${endpoint}`, {
        params:{...params , access_token:process.env.FACEBOOK_ACCESS_TOKEN}
      })
      return response.data
    }catch(err){
     throw new Error('Error fetching data from Facebook API')
    }
}

module.exports = getFacebookData