import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import newsArticlesReducer from '../reducer/newsArticlesReducer'
const configureStore = ()=>{
    const store = createStore(combineReducers({
        newsArticles:newsArticlesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore