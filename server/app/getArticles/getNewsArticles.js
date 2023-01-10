const axios = require("axios")
const NewsArticle = require('../model/newsArticle')

const getNews = async () => {
    // Times Of India ,India
    try {
        const {data} = await axios.get(`${process.env.BASE_URL}=https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms&api_key=${process.env.API_KEY}&count=50`)
        const newItems = data.items
        const TOI_Articles = newItems.map(ele=>{
                    ele.description = ele.description.split('>').reverse()[0]
                    ele.image = ele.enclosure.link
                    ele.author = 'TOI' 
                    ele.category = 'india'
                    return ele
                }) 
            await NewsArticle.insertMany(TOI_Articles,{ordered: false})
        }
        catch(err){
            if(err['code']!==11000)
            {
                console.log(err.message) 
            }  
        }

        //Times of India , world
    
        try {
            const {data} = await axios.get(`${process.env.BASE_URL}=https://timesofindia.indiatimes.com/rssfeeds/296589292.cms&api_key=${process.env.API_KEY}&count=50`)
            const newItems = data.items
            const TOI_Articles = newItems.map(ele=>{
                        ele.description = ele.description.split('>').reverse()[0]
                        ele.image = ele.enclosure.link
                        ele.author = 'TOI' 
                        ele.category = 'world'
                        return ele
                    }) 
                await NewsArticle.insertMany(TOI_Articles,{ordered: false})
            }
            catch(err){
                if(err['code']!==11000)
                {
                    console.log(err.message) 
                }  
            }

            //Times of India, Business
            try {
                const {data} = await axios.get(`${process.env.BASE_URL}=https://timesofindia.indiatimes.com/rssfeeds/1898055.cms&api_key=${process.env.API_KEY}&count=50`)
                const newItems = data.items
                const TOI_Articles = newItems.map(ele=>{
                            ele.description = ele.description.split('>').reverse()[0]
                            ele.image = ele.enclosure.link
                            ele.author = 'TOI' 
                            ele.category = 'business'
                            return ele
                        }) 
                    await NewsArticle.insertMany(TOI_Articles,{ordered: false})
                }
                catch(err){
                    if(err['code']!==11000)
                    {
                        console.log(err.message) 
                    }  
                }
                //Times of India, Sports
                try {
                    const {data} = await axios.get(`${process.env.BASE_URL}=https://timesofindia.indiatimes.com/rssfeeds/4719148.cms&api_key=${process.env.API_KEY}&count=50`)
                    const newItems = data.items
                    const TOI_Articles = newItems.map(ele=>{
                                ele.description = ele.description.split('>').reverse()[0]   
                                ele.image = ele.enclosure.link
                                ele.author = 'TOI'  
                                ele.category = 'sports'
                                return ele
                            }) 
                        await NewsArticle.insertMany(TOI_Articles,{ordered: false})
                    }
                    catch(err){
                        if(err['code']!==11000)
                        {
                            console.log(err.message) 
                        }  
                    }
        // NDTV, India
        try{
            const {data} = await  axios.get(`${process.env.BASE_URL}=https://feeds.feedburner.com/ndtvnews-india-news&api_key=${process.env.API_KEY}`)
            const newItems = data.items
            const NDTV_Articles = newItems.map(ele=>{
                ele.image = ele.enclosure.link
                ele.author = 'NDTV' 
                ele.category = 'india'
                return ele
            }) 
            await NewsArticle.insertMany(NDTV_Articles,{ordered: false})
        }
        catch(err){
            if(err['code']!==11000) 
            {
                console.log(err.message) 
            }  
        }
        //NDTV, world
        try{
            const {data} = await  axios.get(`${process.env.BASE_URL}=https://feeds.feedburner.com/ndtvnews-world-news&api_key=${process.env.API_KEY}`)
            const newItems = data.items
            const NDTV_Articles = newItems.map(ele=>{
                ele.image = ele.enclosure.link
                ele.author = 'NDTV' 
                ele.category = 'world'
                return ele
            }) 
            await NewsArticle.insertMany(NDTV_Articles,{ordered: false})
        }
        catch(err){
            if(err['code']!==11000) 
            {
                console.log(err.message) 
            }  
        }

        //NDTV , Business
        try{
            const {data} = await  axios.get(`${process.env.BASE_URL}=https://feeds.feedburner.com/ndtvprofit-latest&api_key=${process.env.API_KEY}`)
            const newItems = data.items
            const NDTV_Articles = newItems.map(ele=>{
                ele.image = ele.enclosure.link
                ele.author = 'NDTV' 
                ele.category = 'business'
                return ele
            }) 
            await NewsArticle.insertMany(NDTV_Articles,{ordered: false})
        }
        catch(err){
            if(err['code']!==11000) 
            {
                console.log(err.message) 
            }  
        }

        //NDTV, Sports
        try{
            const {data} = await  axios.get(`${process.env.BASE_URL}=https://feeds.feedburner.com/ndtvsports-latest&api_key=${process.env.API_KEY}`)
            const newItems = data.items
            const NDTV_Articles = newItems.map(ele=>{
                ele.image = ele.enclosure.link
                ele.author = 'NDTV' 
                ele.category = 'sports'
                return ele
            }) 
            await NewsArticle.insertMany(NDTV_Articles,{ordered: false})
        }
        catch(err){
            if(err['code']!==11000) 
            {
                console.log(err.message) 
            }  
        } 
    }
module.exports = getNews