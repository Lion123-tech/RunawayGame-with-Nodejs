for(j=bs;j<bal.length;j++)
{
    for(i=start;i<block.length;i++)
    {
        blockx=block[i].getx();
        blockw=block[i].getwidth();
        if(collide_ball_blocks(blockx, blockw, ballx))
          bal[j].setspeed();
    }
}