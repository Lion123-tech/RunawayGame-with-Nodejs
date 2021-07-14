const nl2br  = require('nl2br');
exports.register=(err)=>{
    if(err.name=="MongoError")
    {
        if(err.code == 11000)
          return err.keyValue.Username+" is already registered!";
    }
    else
    {
      let msg="";
      for(var key in err.errors)
      {
       msg+=err.errors[key].message+",";
      
      }
      

      return msg;
    }
}