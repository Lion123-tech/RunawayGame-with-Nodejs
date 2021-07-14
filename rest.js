const path=require('path');
const Error=require('./backend/error-display')
const localstore=require('localStorage');
const fetch=require('./backend/event-score');
//retrun register.hbs
exports.getregisterfile=(req,res,next)=>{
    res.render("register",{
            display:"none",
            errmsg:"errmsg"
        });
}
//return login.hbs
exports.getloginfile=(req,res,next)=>{
    
    res.render("login",{
        display:"none",
        errmsg:"errmsg"
    });
}
//
exports.getgamefile1= async (req,res,next)=>{
    
    res.render("g1",{
        scoredisplay:localstore.getItem("Score1")
    });
}
//
exports.getgamefile2= async (req,res,next)=>{
    
    res.render("g2",{
        scoredisplay:localstore.getItem("Score2")
    });
}
//
exports.getgamefile3= async (req,res,next)=>{
    
    res.render("g3",{
        scoredisplay:localstore.getItem("Score3")
    });
}
//
exports.gethomefile=(req,res,next)=>{
    console.log("Name="+localstore.getItem("Name"));
    if(localstore.length==0)
     res.render("home");
    else
     res.render("home2",{
         name:localstore.getItem("Name")
     });
}
//
exports.logout=(req,res,next)=>{
    localstore.clear();
    res.render("home");
}
//
exports.getgamelogin=(req,res,next)=>{
    res.render("login2");
}