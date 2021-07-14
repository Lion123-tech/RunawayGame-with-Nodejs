const localstore=require('localStorage');
const user=require('./usermodel');
exports.store_score1=async (req,res,next)=>{
    try{
       const score=req.params.Score;
       const username=localstore.getItem("Username");
       if(await ishighscore1(score,username))
       {   
           const User=await user.updateOne({Username:username},{$set:{Score1:score}});

       localstore.setItem("Score1",score);
       res.render("g1",{
           scoredisplay:score
       });}
    
    }
    catch(err){
        res.status(500).json({
            message:"Error occured!!",
            Error:err
        });
    }
}
//
exports.store_score2=async (req,res,next)=>{
    try{
       const score=req.params.Score;
       const username=localstore.getItem("Username");
       if(await ishighscore2(score,username))
       {   
           const User=await user.updateOne({Username:username},{$set:{Score2:score}});

       localstore.setItem("Score2",score);
       res.render("g2",{
           scoredisplay:score
       });}
    
    }
    catch(err){
        res.status(500).json({
            message:"Error occured!!",
            Error:err
        });
    }
}
//
exports.store_score3=async (req,res,next)=>{
    try{
       const score=req.params.Score;
       const username=localstore.getItem("Username");
       if(await ishighscore3(score,username))
       {   
           const User=await user.updateOne({Username:username},{$set:{Score3:score}});

       localstore.setItem("Score3",score);
       res.render("g3",{
           scoredisplay:score
       });}
    
    }
    catch(err){
        res.status(500).json({
            message:"Error occured!!",
            Error:err
        });
    }
}
//


//is current score greater than stored score
const ishighscore1=async (score,username)=>
{
 try{
    const User=await user.findOne({Username:username});
    const score1=parseInt(User.Score1,10);
    score=parseInt(score,10);
   
    if(score1<score)
    { return true;}
    else
    { return false;}
 }
 catch(err)
 {
     res.status(500).json({
         message:err
     });
 }
}
//
const ishighscore2=async (score,username)=>
{
 try{
    const User=await user.findOne({Username:username});
    const score2=parseInt(User.Score2,10);
    score=parseInt(score,10);
   
    if(score2<score)
    { return true;}
    else
    { return false;}
 }
 catch(err)
 {
     res.status(500).json({
         message:err
     });
 }
}
//
const ishighscore3=async (score,username)=>
{
 try{
    const User=await user.findOne({Username:username});
    const score3=parseInt(User.Score3,10);
    score=parseInt(score,10);
   
    if(score3<score)
    { return true;}
    else
    { return false;}
 }
 catch(err)
 {
     res.status(500).json({
         message:err
     });
 }
}
//
exports.retrieve=async ()=>{
        const username=localstore.getItem("Username");
        const User=await user.findOne({Username:username});
        if(User)
          return User.Score;
     
}