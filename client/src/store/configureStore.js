import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import newsArticlesReducer from '../reducer/newsArticlesReducer'
import userReducer from '../reducer/userReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        user:userReducer,
        newsArticles:newsArticlesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore