var c, ctx, img;
let agentx, agenty, blockx, blocky, blockw;
let ag, block = [];
let setblock = false,
  setup = false;
let choice = false;
let start=0,end=1;
//starter function
window.onload = function() {
  c = document.getElementById("myCanvas");
  ctx = c.getContext("2d");
  //agent creates
  ag = new agent();
  ag.inishow();
  //2 blocks
  for (i = 0; i <2; i++) {
    if (i == 0) {
      block[0] = new blocks(150, 0);
      block[0].inishow(150);
    } else {
      block[1] = new blocks(800, 1);
      block[1].inishow(800);
    }
  }

}
//on key events
window.addEventListener("keydown", (event) => {
//for left key pressed
console.log(block.length);
  if (event.keyCode == 37) {
    agentx = ag.getx();
    ctx.clearRect(0, 0, c.width, c.height);
    for (i = start; i < block.length; i++) {
      block[i].show();
    }
    for (i = start; i < block.length && !choice; i++) {
      blockx = block[i].getx();
      blockw = block[i].getwidth();
      if((agentx<600&&i==end&&start==0)||(start!=0&&i==end))
      continue;
      if (setblock && collisionrightdown(agentx +100, blockx)) {
        setblock = false;
        setup = false;
        ag.movedown();
        ag.moveleft();
        ag.show();
        choice = true;
      } else if (!setup && !setblock && stopleft(agentx + 40, blockx, blockx + blockw)) {
        ag.show();
        choice = true;
      }
    }
    if (!choice) {
      ag.moveleft();
      ag.show();
    }
    choice = false;
  }
  //for right key pressed
  if (event.keyCode == 39) {
    agentx = ag.getx();
    ctx.clearRect(0, 0, c.width, c.height);
    if(block[start].getx()+50<=5)
    {
      start=end;
      end+=1;
      if(end%2==0)
      block[end]=new blocks(1110,0);
      else
      block[end]=new blocks(1110,1);
    }
    for (i = start; i <block.length && !choice; i++) {
      blockx = block[i].getx();
      blockw = block[i].getwidth();
      if((agentx>600&&i==start&&start==0)||(start!=0&&i==start))
      continue;
      if (setblock && collisiondown(agentx+60, blockx + blockw)) {//checks collision and a/c to it it pulls down
        setblock = false;
        setup = false;
        ag.movedown();
        //to mave background scene
        if(agentx<=600)
        ag.moveright();
        else
        block[i].moveleft();
        ag.show();
        choice = true;
        
      } else if (!setup && !setblock && stopright(agentx + 140, blockx, blockx + blockw)) {
        ag.show();
        for (i = start; i <block.length; i++) {
          block[i].show();
        }
        choice = true;
      }
    }
    if (!choice) {
      if(agentx<=600)
        ag.moveright();
      else
       { for (i = start; i <block.length; i++) {
          block[i].moveleft();
        }}
      ag.show();
    }
    for (i = start; i <block.length; i++) {
      block[i].show();
    }
    choice = false;
  }
  //for up key pressed
  if (event.keyCode == 38) {
    ctx.clearRect(0, 0, c.width, c.height);
    agentx = ag.getx();
    agenty = ag.gety();
    for (i = 0; i < 2; i++) {
      block[i].show();
    }
    setup = true;
    for (i = 0; i < 2 && !choice; i++) {
      blockx = block[i].getx();
      blocky = block[i].gety();
      blockw = block[i].getwidth();
      if (collisiontranslate(agentx + 130,agentx, agenty, blockx, blocky, blockx + blockw)) {
        setblock = true;

        
        ag.blockmoveup(blocky - 116);
        //ag.moveright();
        ag.show();
        choice = true;
      } else if (collisiontranslate(agentx + 130,agentx, agenty, blockx, blocky, blockx + blockw)) {
        setblock = true;
       
        ag.blockmoveup(blocky - 116);
        //ag.moveleft();
        ag.show();
        choice = true;
      }
    }
    if (!choice||!setblock) {
      setblock = false;
    
      ag.moveup();
      ag.show();
      for (i = 0; i < 2; i++) {
        block[i].show();
      }
      setTimeout(function() {
        ctx.clearRect(0, 0, c.width, c.height);
        ag.movedown();
        ag.show();
        for (i = 0; i < 2; i++) {
          block[i].show();
        }
        setup = false;
      }, 200);
    }
    choice = false;
  }

});