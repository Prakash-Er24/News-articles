import React from 'react'
import { useFormik  } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { startUserLogin,startGetUser } from '../action/userActions'
import { formStyles } from '../helperFunctions/styles'

function Login(props) {
    const {handleCancel} = props
    const dispatch = useDispatch()
    const classes = formStyles()
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            email:Yup.string().required().email(),
            password:Yup.string().required().min(8)
        }),
        onSubmit:function(values,{resetForm}){
            const redirect = () => {
                dispatch(startGetUser())
                handleCancel()
                resetForm()
            }
            startUserLogin(values,redirect)
        }
    })
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
            <input  type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Email"
                    className={classes.input}
            /><br/>
            {
                formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>
            }<br/>
            <input  type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Password"
                    className={classes.input}
            /><br/>
            {
                formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>
            }
            <br/>
            <input type = "submit" value="login" className={classes.submit} />
        </form>    
    </div>
  ) 
}

export default Login