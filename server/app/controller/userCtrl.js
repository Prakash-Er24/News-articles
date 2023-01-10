const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../model/user')
const userCtrl = {}
//User registeration

userCtrl.register = async (req,res) => {
    const {name,email,password} = req.body
    console.log(name,email,password)
    try{
        const user = new User({name,email,password})
        const result = await user.save()
        if(result)
        {
            res.json({success:'Successfully resgistered'})
        }
    }
    catch(err){
        if(err.keyValue.email===email && err.code===11000)
        {
            res.json({notice:`${err.keyValue.email} already exists`})
        }
        else{
            res.json(err)
        }
    }
}

//User login

userCtrl.login = async (req,res) => {
    const {email,password} = req.body
    try { 
        const user = await User.findOne({email})
        if(user)
        {
            const match =await bcrypt.compare(password,user.password)
            if(match){
                const data = {_id:user._id,email:user.email}
                const token = jwt.sign(data,process.env.JWT_KEY,{expiresIn:'2d'})
                res.json({token : `Bearer ${token}`})
            }
            else
            {
                res.json({errors:{message:"invalid email or password"}})
            }
        } 
        else
        {
            res.json({errors:{message:"invalid email or password"}})
        }
    }
    catch(err){
        res.json(err)
    }
}

//Get User data

userCtrl.read = async (req,res)=>{
    const {_id} = req.tokenData
    try{
        const user = await User.findOne({_id},'-password')
        res.json(user)
        }
    catch(err){
        res.json(err)
    }
}

module.exports = userCtrl