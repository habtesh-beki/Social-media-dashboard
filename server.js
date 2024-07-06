const app = require('./app')



PORT = 3000;

app.listen(PORT, () => {
   console.log(`the server is listening on the port ${PORT}`)
})