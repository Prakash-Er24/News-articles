const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const configureDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/news-articles')
        .then((res)=>{
            console.log('connected to db')
        })
        .catch((err)=>{
            console.log('not connected',err)
        })
}

module.exports = configureDb