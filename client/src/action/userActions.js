import axios from 'axios'
import swal from 'sweetalert'

export const startUserRegister = (data,redirect) => {
    axios.post('http://localhost:3044/api/user/register',data)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('notice'))
            {
                swal({title:result.notice,icon:'warning'})
            }
            else if(result.hasOwnProperty('errors'))
            {
                swal({text:result.message, icon:'error'})
            }
            else if(result.hasOwnProperty('success'))
            {
                swal({title:result.success, icon:'success'})
                redirect()
            }
            else
            {
                swal({title:"Unable to register", icon:'error'})
            }
        })
        .catch((err)=>{
            swal({title:err.message,icon:'error'})
        })  
}

export const startUserLogin = (data,redirect) => {
    axios.post('http://localhost:3044/api/user/login',data)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors'))
            {
                swal({title:result.errors.message, icon:'error'})
            }
            else if(result.hasOwnProperty('token'))
            {
                localStorage.setItem('token',result.token)
                swal({title:'Successfully logged in',icon:'success'})
                redirect()
            }
            else 
            {
                swal({title:"Unable to login", icon:'error'})
            }
        })
        .catch((err)=>{
            swal({title:err.message,icon:'error'})
        })
}

export const startGetUser = () => {
    return (dispatch) =>{
     axios.get('http://localhost:3044/api/user',{
        headers:{ 'authorization':localStorage.getItem('token') }
        })
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('notice'))
            {
                swal({title:result.notice,icon:'warning'})
            }

            else if(result.hasOwnProperty('errors'))
            {
                swal({title:result.errors.message,icon:'error'})
            }
            else 
            {
                dispatch(getUser(result))
            }
        })
        .catch((err)=>{
            swal({title:err.message,icon:'error'})
        })
    }
}

const getUser = (data) => {
    return {type:'LOGIN',payload:data}
}

export const logoutUser = () => {
    return {type:'LOGOUT'}
}