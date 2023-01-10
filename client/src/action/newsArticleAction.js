import axios from 'axios'
import swal from 'sweetalert'

export const startGetNewsArticles = (author,category) => {
    return (dispatch) => {
             axios.get(`http://localhost:3044/api/rss-news-feed/${author}?category=${category}`)
             .then((response)=>{
                const result = response.data
                if(result.hasOwnProperty('errors'))
                {
                    swal({title:result.errors.message,icon:'error'})
                }
                else if(result.length>0)
                {
                    dispatch(getNewsArticles(result))
                }
            })
            .catch((err)=>{
                swal({title:err.message,icon:'error'})
            })
    }
}

const getNewsArticles = (data) => {
    return {type:'GET_NEWS_ARTICLES',payload:data}
}