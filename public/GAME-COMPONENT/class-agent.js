class agent{
    constructor()
    {
        this.x=0;
        this.y=520-185;
        this.width=160;
        this.height=120;
        img = new Image();   // Create new img element
        //img.src = 'p1.png';
        img.src = '/GAME-COMPONENT/mario.png';
        this.speed=20;
    }
    inishow()
    {
        img.addEventListener('load', function() {
         // execute drawImage statements here
          ctx.drawImage(img, 0,520-185,160,120);
        },false);
    }
    show()
    {
        ctx.drawImage(img,this.x,this.y,this.width,this.height);
    }
    blockmoveup(up)
    {
     this.y=up;
    }
    blockmovedown(down)
    {
        this.y=down;
    }
    moveup()
    {
     this.y=190;
    }
    movedown()
    {
     this.y=520-185;           
    }
    moveleft()
    {
        if(this.x>=17)
        this.x-=this.speed;
    }
    moveright()
    {
        if(this.x<=1200)
        this.x+=this.speed; 
    }
    getx()
    {
        return this.x;
    }
    gety()
    {
        return this.y;
    }

}