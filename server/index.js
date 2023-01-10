const express = require('express')
const cron = require('node-cron')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = 3044

const configureDb = require('./config/database')
const router = require('./config/routes')
const getNews = require('./app/getArticles/getNewsArticles')

configureDb()
app.use(express.json())
app.use(cors())
app.use(router)

cron.schedule('* * * * *', () => {
    getNews()
})

app.listen(port,()=>{
    console.log('server is running on port',port)
})
