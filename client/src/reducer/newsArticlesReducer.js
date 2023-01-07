const initialValue = []
const newsArticlesReducer = (state=initialValue,action) => {
    switch(action.type){

    case 'GET_NEWS_ARTICLES':{
        return [...action.payload]
    } 
    case 'LIVE_UPDATE' :{
        return [...action.payload,...state]
    }

    default:{
        return state
    }
}
} 
 
export default newsArticlesReducer