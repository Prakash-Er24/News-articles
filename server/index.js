const express = require('express')
const app = express()
const cron = require('node-cron')
const cors = require('cors')
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const port = 3044
const io = new Server(server,{
    cors:{origin:'*'}
});

const configureDb = require('./config/database')
const getNews = require('./config/getNews')
const newsCtrl = require('./app/controller/newsCtrl')

app.use(express.json())
app.use(cors())

configureDb()

app.get('/api/rss-news-feed',newsCtrl.list)

io.on('connection',(socket)=>{
    console.log('socket connected')
    cron.schedule('* * * * *', () => {
            const data = getNews()
            if(data.length>0)
            {
                socket.emit('message',data) 
            } 
          }); 
})
  
server.listen(port,()=>{
    console.log('server is running on port',port)
})
