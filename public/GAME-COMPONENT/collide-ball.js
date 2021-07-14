const collide_ball_blocks2=(blockx,blockw,ballx)=>{
    if((ballx+25)>=blockx&&(ballx+25)<=(blockx+blockw))
    return true;
    if(ballx+25>=1100)
     return true;
    else 
    return false;
}
const collide_ball_blocks1=(blockx,blockw,ballx)=>{
  if((ballx-25)<=(blockx+blockw)&&(ballx-25)>=blockx)
  return true;
  if(ballx-25<=0)
  return true;
  else 
  return false;
}
const gayab=(blockx,blockw,ballx)=>{
  if((ballx+25)>=blockx&&(ballx+25)<=(blockx+blockw))
    return true;
  if((ballx-25)<=(blockx+blockw)&&(ballx-25)>=blockx)
    return true;
  else 
    return false;
}
const collide_agent_ball=(agentx,ballx)=>{
   agentx=agentx+100;
   if(agentx>=ballx-25&&agentx<=ballx+25)
     return true;
   agentx=agentx+70-100;
   if(agentx>=ballx-25&&agentx<=ballx+25)
     return true;
   else
   return false;
}