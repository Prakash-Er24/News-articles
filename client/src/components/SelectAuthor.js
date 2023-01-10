import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startGetNewsArticles } from '../action/newsArticleAction'
import { selectStyles } from '../helperFunctions/styles'

function SelectAuthor(props) {
    const [author,setAuthor] = useState('TOI')
    const [category,setCategory] = useState('india')
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetNewsArticles(author,category))
    },[dispatch,author,category])

    const classes = selectStyles()
    const handleChange = (e) => {
        if(e.target.name==='author')
        {
            setAuthor(e.target.value)
        }
        else if(e.target.name==='category')
        {
            setCategory(e.target.value)
        }
    }
    
  return (
    <div className={classes.select}>
        <select onChange={handleChange} name="author" className={classes.author}>
            <option value = 'TOI'>TIMES OF INDIA</option>
            <option value = 'NDTV'>NDTV</option>
        </select>
        <select onChange={handleChange} name="category" className={classes.category} >
            <option value = 'india'>India</option>
            <option value = 'world'>World</option>
            <option value = 'business'>Business</option>
            <option value = 'sports'>Sports</option>
        </select>
    </div>
  )
}

export default SelectAuthor