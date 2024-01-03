let imagesall = document.querySelectorAll("img");
let h1=document.querySelector("#hid");
let p1 =document.querySelector("#p1");
let p2 =document.querySelector("#p2");
let c1=0;
let c2=0;

console.log(imagesall);
imagesall.forEach((img)=>
{
    img.addEventListener("click",(e)=>
    {
        id=img.getAttribute("id");
        let x =Math.floor(Math.random() *3);
        if(x==0){f1="stone";}
        if(x==1){f1="paper";}
        if(x==2){f1="scissor";}
console.log(id);
console.log(f1);

        if(id=="im1" && f1=="stone")
        {
            h1.innerText="game is Tie"
            console.log("stone hai dono ka");
        }
        else if(id=="im2" && f1=="paper")
        {
            h1.innerText="game is Tie"
            console.log("paper hai dono ka");
        }
        else if(id=="im3" && f1=="scissor")
        {
            h1.innerText="game is Tie"
            console.log("scissor hai dono ka");
        }
        
        else if(id=="im1" && f1=="paper")
        {
            h1.innerText="computer won";
            console.log("paper win");
            c1++;
            p2.innerText=c1+"";
        }
        else if(id=="im1" && f1=="scissor")
        {
            h1.innerText="you won and got a point";
            console.log("stone win");
            c2++;
            p1.innerText=c2+"";
        }
        else if(id=="im2" && f1=="stone")
        {
            h1.innerText="you won and got a point";
            console.log("paper win");
            c2++;
            p1.innerText=c2+"";
        }
        else if(id=="im2" && f1=="scissor")
        {
            h1.innerText="computer won";
            console.log("scissor win");
            c1++;
            p2.innerText=c1+"";
        }
        else if(id=="im3" && f1=="stone")
        {
            console.log("stone win");
            h1.innerText="computer won";
            c1++;
            p1.innerText=c1+"";
        }
        else if(id=="im3" && f1=="paper")
        {
            console.log("scissor win");
            h1.innerText="you won and got a point";
            c2++;
            p2.innerText=c2+"";
        }
        console.log(x);
    });
});

