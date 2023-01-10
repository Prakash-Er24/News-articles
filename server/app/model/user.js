const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const { isEmail } = validator
const { Schema } = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true,
        validate : {
            validator : function(value){
                return isEmail(value)
            },
            message : function(){
                return 'invalid email format'
            }
        }
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minlength:8,
        maxlength:128
    },
   
},{timestamps:true})

//Password encryption

userSchema.pre('save',function(next){
    const {password} = this
    bcrypt.genSalt(10)
        .then((salt)=>{
            bcrypt.hash(password,salt)
                .then((encrypted)=>{
                    this.password = encrypted
                    next()
                })
        })
})

const User = mongoose.model('User', userSchema)

module.exports = User