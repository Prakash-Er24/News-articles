const axios = require("axios")
const NewsArticle = require('../model/newsArticle')
const baseData = require("../config/config")

const getNews = async () => {

    baseData.forEach(async (obj) => {
        try {
            const { data } = await axios.get(`${process.env.BASE_URL}=${obj.link}&api_key=${process.env.API_KEY}&count=50`)
            const newItems = data.items
            const articles = newItems.map(ele => {
                ele.description = ele.description.split('>').reverse()[0]
                ele.image = ele.enclosure.link
                ele.author = obj.author
                ele.category = obj.category
                return ele
            })
            const response = await NewsArticle.insertMany(articles, { ordered: false })
            console.log(`${response.length} Data inserted - ${obj.author} - ${obj.category}`)
        }
        catch (err) {
            if (err['code'] !== 11000) {
                console.log(err.message)
            }
        }
    })
}

module.exports = getNews