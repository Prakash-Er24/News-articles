import axios from 'axios'

export const startGetNewsArticles = () => {
    return async (dispatch) => {
        try{
            const {data} = await axios.get('http://localhost:3044/api/rss-news-feed')
            dispatch(getNewsArticles(data))
        }
        catch(e){
            alert(e.message)
        }
    }
}

const getNewsArticles = (data) => {
    return {type:'GET_NEWS_ARTICLES',payload:data}
}