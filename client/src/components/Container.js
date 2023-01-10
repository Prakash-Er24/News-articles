import React, { useEffect,useState } from 'react'
import { startGetUser } from '../action/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@material-ui/core';
import { Modal } from 'antd'

import Articles from './Articles'
import Login from './Login'
import Register from './Register'
import SelectAuthor from './SelectAuthor';
import { logoutUser } from '../action/userActions'
import { containerStyles } from '../helperFunctions/styles';
import logo from '../images/logo.png'
import swal from 'sweetalert';

function Container() {
    const [loggedIn,setLoggedIn] = useState(!!localStorage.getItem('token'))
    const [form,setForm] = useState('register')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()
    const user = useSelector((state)=>state.user)

    useEffect(()=>{
        localStorage.getItem('token') && dispatch(startGetUser())
    },[dispatch])

    useEffect(()=>{
        Object.keys(user).length===0 ? setLoggedIn(true) : setLoggedIn(false)
    },[user])
    
    const handlelogout = ()=> {
        localStorage.removeItem('token')
        dispatch(logoutUser())
        swal({title:'Logged out',icon:'success'})
    }

    const showModal = (value) => {
        setForm(value)
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }
    
    const classes = containerStyles();

    return (
    <div className={classes.nav_bar}>
         <Box bgcolor="text.primary"  pl={3} p={1} mb={3}>
            <img src={logo} alt="logo" className={classes.logo}/>
       
        {
            loggedIn ?
            <div className={classes.button}>
                <button className={classes.register} onClick={()=>showModal('register')}>Register</button>
                <button className={classes.login} onClick={()=>showModal('login')}>Login</button>
            </div>:<div>
                <span className={classes.user}>Welcome, {user.name} </span>
                <button onClick = {handlelogout} className={classes.logout}>logout</button>
            </div>
        }   
        </Box>

        <Modal
            open={isModalOpen} 
            onCancel={handleCancel} 
            okButtonProps={{style:{display:'none'}}}
            cancelButtonProps={{style:{backgroundColor:'#f44336',color:'white'}}}
        >
            {
               form==='login'?<Login handleCancel = {handleCancel} /> :<Register handleCancel = {handleCancel} />
            }
        </Modal>
        
        <SelectAuthor />
        <Articles />
    </div>
  )
}

export default Container