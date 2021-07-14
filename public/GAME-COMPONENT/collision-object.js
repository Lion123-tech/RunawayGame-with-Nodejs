const collisiontranslate=(agentw,agentx,agenty,blockx,blocky,blockw)=>{
    console.log("agenty="+agenty);
    console.log("blocky="+blocky);
    //console.log("help1="+agentw+">="+blockx+"&&"+agentw+"<="+blockw);
    //console.log("help2="+agentx+">="+blockx+"&&"+agentx+"<="+blockw)
    if((agentw>=blockx&&agentw<=blockw)||(agentx>=blockx&&agentx<=blockw))
      {
          if(agenty>=blocky)
          return true;
          else
          return false; 
      }
      else
      return false;
}
const collisiondown=(agentx,blockw,bset)=>{
    if(agentx>=blockw&&bset)
    return true;
    else
    return false;
}
const collisionrightdown=(agentx,blockx,bset)=>{
    if(agentx<=blockx&&bset)
    return true;
    else 
    return false;
}
const stopright=(agentx,blockx,blockw)=>{
    if(agentx>=blockx&&agentx<=blockw)
    return true;
    else 
    return false;
}
const stopleft=(agentx,blockx,blockw)=>{
    if(agentx<=blockw&&agentx>=blockx)
    return true;
    else 
    return false;
}
