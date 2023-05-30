const baseData = require('../config/config')
const NewsArticle = require('../model/newsArticle')

module.exports.list = async (req, res) => {
    const { author } = req.params
    const { category } = req.query
    try {
        const newsData = await NewsArticle.find({ author, category }).sort({ pubDate: -1 })
        res.json(newsData)
    }
    catch (e) {
        res.json(e)
    }
}

module.exports.authorList = async (req, res) => {
    try {
        const author = baseData.map(ele => ele.author)
        res.json(author)
    } catch (error) {
        res.json(e)
    }
}

module.exports.categoryList = async (req, res) => {
    try {
        const { author } = req.query
        const category = baseData.filter(ele => ele.author === author)
        res.json(category)
    } catch (error) {
        res.json(e)
    }
}
