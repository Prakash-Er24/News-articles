import React, { useState } from 'react'
import {useSelector } from 'react-redux'
import { CardActionArea,Card,CardContent,Typography, CardMedia, Link } from '@material-ui/core';
import {Pagination} from '@mui/material'
import { useStyles } from '../helperFunctions/styles';
import usePagination from '../helperFunctions/Pagination';
import TOI from '../images/TOI.jpg'
import NDTV from '../images/NDTV.png'
import logo from '../images/logo.png'

const Articles = () => {
    let [page, setPage] = useState(1);
            
    const per_page = 10;
    const articles = useSelector((state)=>state.newsArticles)
    const count = Math.ceil(articles.length / per_page);

    const classes = useStyles();
    const data = usePagination(articles, per_page)

    const handleChange = (event, value) => {
        setPage(value);
        data.jump(value);
      }

    return (
    <div>
        {
            data.currentData().map(article=>{
             return (<div key={article.guid}>
                        <Card variant="outlined" className={classes.root} >
                            <img src={article.author==='TOI'?TOI:NDTV} alt={articles.author} className={classes.author} />
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={article.image?article.image:logo}
                                title={article.title}
                            />
                            <CardContent>
                                <Typography variant='h5' className={classes.title}>
                                        {article.title}
                                </Typography>

                                <Typography color="textSecondary" variant="body1" className={classes.description}>
                                    {article.description}
                                </Typography>

                                <Typography className={classes.date} variant="body2">
                                    {article.pubDate.slice(0,10)}/{article.pubDate.slice(11,16)}
                                </Typography>
                                
                                <Typography>
                                    <Link href={article.link} target="_blank" className={classes.read} variant="body2">
                                        Read article
                                    </Link>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </div>)
        })
    }
    <Pagination count={count} 
                page={page} 
                size="large"
                variant="outlined" 
                shape="rounded" 
                onChange={handleChange}
                className={classes.pagination}
    />
    </div>
  )
}

export default Articles