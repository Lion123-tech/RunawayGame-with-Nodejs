const image=function(imgpath){
    return new Promise(function(resolve,reject){
        const i=document.createElement('img');
        i.src=imgpath;
        img.addEventListener('load',()=>{
            document.querySelector('.images').append(img);
        });
        img.addEventListener('error',()=>{
            console.log('Image not found');
        });
    });
};
image('mp.png').then((img)=>{console.log("Image 1");
return wait(1);
}).then((img)=>{console.log("Image 2");
return wait(1);
});