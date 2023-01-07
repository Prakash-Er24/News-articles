const NewsArticle = require('../model/newsArticle')
module.exports.list = async (req,res) => {
    try{
        const newsData = await NewsArticle.find().sort({pubDate:-1})
        res.json(newsData)
    }
    catch(e){
        res.json(e)
    }
}