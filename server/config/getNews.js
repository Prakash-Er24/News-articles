const axios = require("axios")
const NewsArticle = require('../app/model/newsArticle')

 let insertedData =[]
const getNews =  () => {
        axios.get('https://timesofindia.indiatimes.com/rssfeedstopstories.cms?feedtype=sjson')
        .then((response)=>{
            const newsItems = response.data.channel.item
            const imageData = newsItems.map(ele=>{
                    const img = ele.link.split('/')
                    const imgNum = img[img.length-1].split('.')[0]
                    ele.image = `https://static.toiimg.com/thumb/msid-${imgNum}/${imgNum}.jpg`
                    return ele
                }) 

            return  NewsArticle.insertMany(imageData,{ordered: false})
            
        .then((insertedData)=>{
            console.log('inserted')
        },
        (err)=>{
            if(err.insertedDocs.length>0)
            {
                const newData = err.insertedDocs
                insertedData.push(...newData)
            }
            else if(err.insertedDocs.length===0){
                insertedData = []
            }
            if(err['code']!==11000)
            {
                console.log(err.message) 
            } 
        })
        })
        return insertedData
}  

         



module.exports = getNews