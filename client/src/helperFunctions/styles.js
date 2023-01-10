import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
      maxWidth: 1100,
      margin: 'auto',
      marginBottom:"20px",
      position:'relative',
      backgroundColor:"#fafafa"
    },
    media: {
      height:"120px",
      width:"120px",
      float:"left",
      margin:"20px"
    },
    author:{
        position:'absolute',
        height:'30px',
        right:'5px',
        top:'5px'
    },
    title:{
        textDecoration:"none",
        color:"#0d47a1",
        marginRight:'100px'
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
   
    pagination:{
        display:'flex',
        justifyContent:'center'
    },
  });

  export const containerStyles = makeStyles({
    nav_bar:{
        position:'relative'
    },
    logout:{
        position:'absolute',
        right:'20px',
        top:'40px',
        padding:'5px 10px',
        fontWeight:'bold',
        cursor:'pointer'
    },
    user:{
        position:'absolute',
        color:'white',
        right:'10px',
        top:'10px',
        fontSize:'110%'
    },
    logo:{
        height:'65px'
    },
    button:{
        position:'absolute',
        right:'10px',
        top:'30px',
    },
    login:{
        padding:'5px 10px',
        marginLeft:'10px',
        fontWeight:'bold',
        cursor:'pointer'
    },
    register:{
        padding:'5px 10px',
        fontWeight:'bold',
        cursor:'pointer'
    }
  })

 export const formStyles = makeStyles({
    input:{
        padding:'5px',
        borderRadius:'5px',
        width:'200px',
        border:'1px solid gray'
    },
    submit:{
        padding:'5px 10px',
        backgroundColor:'#1565c0',
        color:'white',
        border:'1px solid #1565c0',
        cursor:'pointer',
        borderRadius:'5px'
    }
 }) 

 export const selectStyles = makeStyles({
    select:{
        position:'relative',
        marginLeft:'40%',
        marginBottom:"20px"
    },
    author:{
        width:'150px',
        padding:"5px",
        fontWeight:"bold",
        borderRadius:'5px',
        border:'1px solid #00695c'
    },
    category:{
        marginLeft:"20px",
        width:"100px",
        padding:"5px",
        fontWeight:"bold",
        borderRadius:'5px',
        border:'1px solid #00695c'
    }
 })