import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Box , CardActionArea,Card,CardContent,Typography, CardMedia, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { startGetNewsArticles } from '../action/newsArticleAction'
import logo from '../images/logo.png'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3044');

const Articles = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
     socket.on('message',function(data){
        dispatch({type:"LIVE_UPDATE",payload:data})
     })   
    },[dispatch])

    useEffect(()=>{
        dispatch(startGetNewsArticles())
    },[dispatch])

    const articles = useSelector((state)=>state.newsArticles)
   
    const useStyles = makeStyles({
        root: {
          maxWidth: 1100,
          margin: 'auto',
          marginBottom:"20px",
          position:'relative'
        },
        media: {
          height:"120px",
          width:"120px",
          float:"left",
          margin:"20px"
        },
        title:{
            textDecoration:"none",
            color:"#0d47a1"
        },
        date:{
            position:'absolute',
            bottom:'10px',
            right:'20px'
        },
        description:{
            margin:"10px 0 20px 140px",
        },
        read:{
            position:'absolute',
            bottom:'10px',
            left:"160px"
        },
        logo:{
            height:'80px'
        },
        pagination:{
            margin:'auto'
        }
      });
      
    const classes = useStyles();

    return (
    <div>
        <Box bgcolor="text.primary"  pl={3} p={1} mb={3}>
            <img src={logo} alt="logo" className={classes.logo}/>
        </Box>
       
        {
            articles.map(article=>{
             return (<div key={article.guid}>
                        <Card variant="outlined" className={classes.root} >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={article.image}
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
                                    {article.pubDate.split(/T|\+/).slice(0,2).join('/')}
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
    </div>
  )
    
}

export default Articles