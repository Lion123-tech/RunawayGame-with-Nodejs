class ball{
    constructor(ctx,x,y){
        this.x=x;
        this.y=y;
        this.cont=ctx;
        this.speed=11;
        this.set=false;
        this.setshow=true;
    }
    show()
    {
        if(this.setshow)
      {this.cont.beginPath();
      this.cont.arc(this.x,this.y,25, 0, 2 * Math.PI);
      this.cont.fillStyle = "red";
      this.cont.fill();
      this.cont.beginPath();
      this.cont.arc(this.x,this.y,20, 0, 2 * Math.PI);
      this.cont.fillStyle = "yellow";
      this.cont.fill();  }
    }
    move()
    {
        if(this.setshow)
        {this.x+=this.speed;}
    }
    setspeed2()
    {
        if(this.setshow)
        {this.speed=-(this.speed);
        this.x-=26;
        this.set=true;}
    }
    setspeed1()
    {
        if(this.setshow)
        {this.speed=-(this.speed);
        this.x+=26;
        this.set=true;}
    }
    setfalse()
    {
        this.set=false;
    }
    setshowf()
    {
        this.setshow=false;
    }
    getset()
    {
        return this.set;
    }
    getx()
    {
        return this.x;
    }
    setx()
    {
        this.x=25;
    }
}