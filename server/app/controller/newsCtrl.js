const NewsArticle = require('../model/newsArticle')

module.exports.list = async (req,res) => {
    const { author } = req.params
    const { category } = req.query
    try{
        const newsData = await NewsArticle.find({author,category}).sort({pubDate:-1})
        res.json(newsData)
    }
    catch(e){
        res.json(e)
    }
}

