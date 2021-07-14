

//game-code starts
var c, ctx, img;
let agentx, agenty, blockx, blocky, blockw;
let ag, block = [],
  bal = [];
let bs = 0,
  be = 0;
let setblock = false,
  setup = false;
let choice = false;
let start = 0,
  end = 1;
let ballcollide = false;
let score;
//starter function
window.onload = function() {
  c = document.getElementById("myCanvas");
  ctx = c.getContext("2d");
  //agent creates
  ag = new agent();
  ag.inishow();
  //2 blocks
  for (i = 0; i < 2; i++) {
    if (i == 0) {
      block[0] = new blocks(230, 0);
      block[0].inishow(150);
    } else {
      block[1] = new blocks(900, 1);
      block[1].inishow(900);
    }
  }
  bal[0] = new ball(ctx, 750, 430);
  console.log(bal.length);
}
//on key events
window.addEventListener("keydown", (event) => {
  //for left key pressed
  if (!stopgame) {
    if (event.keyCode == 37) {
      agentx = ag.getx();
      ctx.clearRect(0, 0, c.width, c.height);
      for (i = start; i < block.length; i++) {
        block[i].show();
      }
      for (i = start; i < block.length && !choice; i++) {
        blockx = block[i].getx();
        blockw = block[i].getwidth();
        bset = block[i].getset();
        if (setblock && collisionrightdown(agentx + 100, blockx, bset)) {
          setblock = false;
          setup = false;
          ag.movedown();
          ag.moveleft();
          ag.show();
          choice = true;
          block[i].setblock(false);
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
      if (block[start].getx() + 50 <= 5) {
        start = end;
        end += 1;
        if (end % 2 == 0)
          block[end] = new blocks(1120, 0);
        else
          block[end] = new blocks(1120, 1);
       if(end%2!=0)
       { bs = be;
        be += 1;
        bal[be] = new ball(ctx, 950,430);}
      }
      for (i = start; i < block.length && !choice; i++) {
        blockx = block[i].getx();
        blockw = block[i].getwidth();
        bset = block[i].getset();
        if (setblock && collisiondown(agentx + 60, blockx + blockw, bset)) { //checks collision and a/c to it it pulls down
          setblock = false;
          setup = false;
          ag.movedown();
          //to mave background scene
          if (agentx <= 500)
            ag.moveright();
          else
            block[i].moveleft();
          ag.show();
          choice = true;
          block[i].setblock(false);

        } 
        else if(setup && !setblock && stopright(agentx + 135, blockx, blockx + blockw))
        {
          translate();
        }
        else if (!setup && !setblock && stopright(agentx + 135, blockx, blockx + blockw)) {
          ag.show();
          for (i = start; i < block.length; i++) {
            block[i].show();
          }
          choice = true;
        }
        
      }
      if (!choice) {
        if (agentx <= 500)
          ag.moveright();
        else {
          for (i = start; i < block.length; i++) {
            block[i].moveleft();
          }
        }
        ag.show();
      }
      for (i = start; i < block.length; i++) {
        block[i].show();
      }
      
      choice = false;
    }
    //for up key pressed
    if (event.keyCode == 38) {
      ctx.clearRect(0, 0, c.width, c.height);
      agentx = ag.getx();
      agenty = ag.gety();
      for (i = start; i < block.length; i++) {
        block[i].show();
      }
      setup = true;
      translate();
      if (!choice || !setblock) {
        setblock = false;

        ag.moveup();
        ag.show();
        for (i = start; i < block.length; i++) {
          block[i].show();
        }
        setTimeout(function() {
          ctx.clearRect(0, 0, c.width, c.height);
          ag.movedown();
          ag.show();
          for (i = start; i < block.length; i++) {
            block[i].show();
          }
          setup = false;
        }, 350);
      }
      choice = false;
    }
  }
});
let ballx, stopgame = false;
let j;
setInterval(function() {
  if (!stopgame) {
    ctx.clearRect(0, 0, c.width, c.height);
    ag.show();
    for (i = start; i < block.length; i++) {
      block[i].show();
    }
    //checking of collision between agent and balls
    for (j = bs; j < bal.length; j++) //ball length
    {
      ballx = bal[j].getx();
      agentx = ag.getx();
      if (!setup && collide_agent_ball(agentx, ballx))
      {  stopgame = true;
        let score1=gameover();
        localStorage.setItem("Score",score1);
        set_score();
      }
    }
    //
    if(block[start].getx()<80&&bal[bs].getx()<80)
      bal[bs].setshowf();
    for (j = bs; j < bal.length; j++) {
      ballx = bal[j].getx();
      for (i = start; i < block.length; i++) {
        blockx = block[i].getx();
        blockw = block[i].getwidth();
  
         if (i==start&&collide_ball_blocks1(blockx, blockw, ballx))
          { 
            bal[j].setspeed1();}
        else if(collide_ball_blocks2(blockx, blockw, ballx))
        {bal[j].setspeed2();}
        else if(j==bs&&be>0&&collide_ball_blocks2(blockx, blockw, ballx))
        {bal[j].setspeed2();}
        
      }
    }
    for (i = bs; i < bal.length; i++) {
      if(!bal[i].getset())
      {bal[i].move();}
      bal[i].show();
      bal[i].setfalse();
    }
    console.log(bs+"=bs,"+be+"=be");
  }
},30);
function translate()
{
  for (i = start; i < block.length && !choice; i++) {
    blockx = block[i].getx();
    blocky = block[i].gety();
    blockw = block[i].getwidth();
    if (collisiontranslate(agentx + 120, agentx + 44, agenty, blockx, blocky, blockx + blockw)) {
      setblock = true;
      console.log("Yes!It returns true!!!");

      ag.blockmoveup(blocky - 116);
      ag.moveright();
      ag.show();
      choice = true;
      block[i].setblock(true);
    } else if (collisiontranslate(agentx + 120, agentx + 44, agenty, blockx, blocky, blockx + blockw)) {
      setblock = true;

      ag.blockmoveup(blocky - 116);
      ag.moveleft();
      ag.show();
      choice = true;
      block[i].setblock(true);
    }
  }
}
let stin;
function gameover()
{
  score=block.length*100;
  stin="SCORE:"+score;
  ctx.beginPath();
  ctx.rect(0,100, c.width,200);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.font = "40px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("Game over",c.width/2,150);
  ctx.fillText(stin,c.width/2,200);
  return score;
}
function set_score()
{
  var xhttp = new XMLHttpRequest();
  const hgjk=localStorage.getItem("Score");
  const url="/highscore1/"+hgjk;
  xhttp.open("GET", url, true);
  xhttp.send();
}
