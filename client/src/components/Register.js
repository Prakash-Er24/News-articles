import React from 'react'
import { useFormik  } from 'formik'
import * as Yup from 'yup'
import { startUserRegister } from '../action/userActions'
import { formStyles } from '../helperFunctions/styles'

function Register(props) {
    const {handleCancel} = props
    const classes = formStyles()
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
            name:'',
            occupation:''
        },
        validationSchema:Yup.object({
            email:Yup.string().required().email(),
            password:Yup.string().required().min(8),
            name:Yup.string().required()
        }),
        onSubmit:function(values,{resetForm}){
            const data = {
                name:values.name,
                email:values.email,
                password:values.password, 
            }
            const redirect = () => {
                resetForm()
                handleCancel()
            }
            startUserRegister(data,redirect)
        }
    })
  return (
    <div>
        <h2>Register here</h2>
        <form onSubmit={formik.handleSubmit}>
            <input  type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="Name"
                    className={classes.input}
            /><br/>
            {
                formik.touched.name && formik.errors.name && <span className={classes.error}>{formik.errors.name}</span>
            }
            <br/>
            <input  type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Email"
                    className={classes.input}
            /><br/>
            {
                formik.touched.email && formik.errors.email && <span className={classes.error}>{formik.errors.email}</span>
            }
            <br/>

            <input  type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Password"
                    className={classes.input}
            /><br/>
            {
                formik.touched.password && formik.errors.password && <span className={classes.error}>{formik.errors.password}</span>
            }
            <br/>
            <input type = "submit" value="Register" className={classes.submit} />
        </form>    
    </div>
  )
}

export default Register