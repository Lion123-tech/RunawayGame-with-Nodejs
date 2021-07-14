       let tb1,b1,show;
        
        tb1=false;
        show=document.querySelector(".nav-list2");
        
        show.style.display="none";
        b1=document.querySelector(".bar-logo");
        window.addEventListener("resize",()=>{
            if(screen.width>=800)
            show.style.display="none";
        });
        function togglebar()
        {
           
           
                if(!tb1)
                {
                    show.style.display="flex";
                    tb1=true;
                }
                else
                {
                    show.style.display="none";
                    tb1=false;  
                }
    
        }