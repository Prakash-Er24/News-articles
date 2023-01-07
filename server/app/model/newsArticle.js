const mongoose = require('mongoose')
const { Schema, model } = mongoose

const newsArticleSchema = new Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
        default:''
    },
    link:{
        type:String,
    },  
    image:{
        type:String
    },
    guid:{
        type:String,
        required:true,
        unique:true
    },
    pubDate:{
        type:String,
    },
},{timestamps:true})

const NewsArticle = model('NewsArticle', newsArticleSchema)

module.exports = NewsArticle