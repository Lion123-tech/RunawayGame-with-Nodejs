exports.register=(err,res)=>{

     res.render("register",{
         display:"block",
         errmsg:err
     });
}

exports.login=(err,res)=>{

    res.render("login",{
        display:"block",
        errmsg:err
    });
}