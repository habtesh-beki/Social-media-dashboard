const express = require('express');
const dotenv = require('dotenv');

const facebookRoutes = require('./Routes/facebookRoute')
const insagramRoutes = require('./Routes/instagramRoute')
const youtubeRoute = require('./Routes/youtubeRoute')

const app = express();
dotenv.config();

app.use('/api/facebook' , facebookRoutes)
app.use('/api/insagram' , insagramRoutes)
app.use('/api/youtube' , youtubeRoute)


module.exports = app;