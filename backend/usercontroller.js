const user=require('./usermodel');
const Error=require('./error-display')
const identify=require('./identify-error');
const localstore=require('localStorage');
exports.createuser=async (req,res,next)=>{
    try{
        const data1=req.body.username;
        const data2=req.body.password;
        const data3=req.body.name;
        const data4=req.body.cpassword;
        //if
        if(data2!=data4)
        {
            Error.register("Passwords are not same,Please re-enter password!",res);
        }
        else
        {
        const p=await user.create({Name:req.body.name,Username:req.body.username,
            Password:req.body.password,Score1:"0",Score2:"0",Score3:"0"});
        localstore.setItem("Name",data3);
        localstore.setItem("Username",p.Username);
        localstore.setItem("Score1",p.Score1);
        localstore.setItem("Score2",p.Score2);
        localstore.setItem("Score3",p.Score3);
        res.render("home2");
    }}
    catch(err){
       
        //1.find name of error
        //2.if mongoerror,find error code else if validation error,loop through errors messages an then apply break
        //3.display them
        const errormessage=identify.register(err);
        Error.register(errormessage,res);
        //Error.register(err,res);
       
    }
}


exports.getuser= async (req,res,next)=>{
    try{
        if(req.body.username==""&&req.body.password=="")
           Error.login("Please enter username and password!!",res);
        else if(req.body.username=="")
            Error.login("Please enter username and password!!",res);
        else if(req.body.password=="")
            Error.login("Please enter password!!",res);
        else
        {const data1=req.body.username;
           
         const data2=req.body.password;
        const p=await user.findOne({Username:data1})
        if(p)
         {
            if(!(await p.passwordcheck(data2,p.Password)))
              Error.login("Password is incorrect!!",res);
            else
              {
                  
                  localstore.setItem("Name",p.Name);
                  localstore.setItem("Username",p.Username);
                  localstore.setItem("Score1",p.Score1);
                  localstore.setItem("Score2",p.Score2);
                  localstore.setItem("Score3",p.Score3);
                  res.render("home2",{
                      name:localstore.getItem("Name")
                  });
              }
         }
        else
         Error.login(data1+" is not registered!!",res);}
    }
    catch(err){
       
        /*res.status(500).json({
            msg:err
        });*/
        Error.login(err,res);
        
    }
}  


//////
exports.getusergame= async (req,res,next)=>{
    try{
        if(req.body.username==""&&req.body.password=="")
           Error.login("Please enter username and password!!",res);
        else if(req.body.username=="")
            Error.login("Please enter username and password!!",res);
        else if(req.body.password=="")
            Error.login("Please enter password!!",res);
        else
        {const data1=req.body.username;
           
         const data2=req.body.password;
        const p=await user.findOne({Username:data1})
        if(p)
         {
            if(!(await p.passwordcheck(data2,p.Password)))
              Error.login("Password is incorrect!!",res);
            else
             {
                localstore.setItem("Name",p.Name);
                localstore.setItem("Username",p.Username);
                localstore.setItem("Score1",p.Score1);
                localstore.setItem("Score2",p.Score1);
                localstore.setItem("Score3",p.Score1);
                res.render("home2",{
                    name:localstore.getItem("Name")
                });
             }
         }
        else
         Error.login(data1+" is not registered!!",res);}
    }
    catch(err){
       
        
        Error.login(err,res);
        
    }
}  