let b1=[];
b1[0]=new Image();
b1[0].src="/GAME-COMPONENT/wall.PNG";
b1[1]=new Image();
b1[1].src="/GAME-COMPONENT/wall.PNG";
let xvalue,bimage;
class blocks{
    constructor(x,k)
    {
        this.x=x;
        this.y=330;
        this.width=80;
        this.height=120;
        this.k=k;
        this.speed=12;
        this.set=false;
    }
    inishow(x)
    {
        xvalue=x;
        if(this.k==0)
        {b1[0].addEventListener('load', function() {
         // execute drawImage statements here
          ctx.drawImage(b1[0],xvalue,330,80,120);
        },false);
        }
        else{
            b1[1].addEventListener('load', function() {
                // execute drawImage statements here
                 ctx.drawImage(b1[1],xvalue,330,80,120);
               },false);  
               //ctx.drawImage(b1[1],xvalue,330,80,120);
        }
    }
    show()
    {
        if(this.k==0)
        ctx.drawImage(b1[0],this.x,this.y,this.width,this.height);
        else
        ctx.drawImage(b1[1],this.x,this.y,this.width,this.height);
    }
    moveleft()
    {
        this.x-=this.speed;
    }
    getx()
    {
      return this.x;
    }
    gety()
    {
     return this.y;
    }
    getwidth()
    {
        return this.width;
    }
    getset()
    {
        return this.set;
    }
    setblock(param)
    {
        this.set=param;
    }
}