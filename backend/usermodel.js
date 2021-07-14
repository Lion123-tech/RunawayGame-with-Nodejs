const express=require('express');
const mongoose=require('mongoose');
const validator=require('mongoose-validator');
const bcrypt=require('bcryptjs');
const userschema=new mongoose.Schema({
    Name:{
        type:String,
        required:[true,"Your name is required!"],
    },
    Username:{
        type:String,
        required:[true,"Username is required"],
        unique:[true,"Username already exist"]
    },
    Password:{
        type:String,
        required:[true,"Password is required"],
    },
    Score1:{
        type:String
    },
    Score2:{
        type:String
    },
    Score3:{
        type:String
    }
});
userschema.pre('save',async function(next){
    //if(!this.isModified('password')) return next();
    this.Password=await bcrypt.hash(this.Password,12);
   
    next();
});
userschema.methods.passwordcheck=async function(createp,userp){
    return await bcrypt.compare(createp,userp);
};
module.exports=mongoose.model("scoreusers",userschema);
