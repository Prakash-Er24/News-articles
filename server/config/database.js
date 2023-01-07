const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const configureDb = () => {
    mongoose.connect('mongodb://localhost:27017/news-articles')
        .then((res)=>{
            console.log('connected to db')
        })
        .catch(()=>{
            console.log('not connected')
        })
}

module.exports = configureDb