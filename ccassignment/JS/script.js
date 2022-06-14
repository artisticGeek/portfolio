
function init(){
    
    sendProgress=document.getElementById("sp");
    recProgress1=document.getElementById("rp1");
    recProgress2=document.getElementById("rp2");
    recProgress3=document.getElementById("rp3");
    tr=document.getElementById("finallydone");
    mybutton=document.getElementById("activate");
    styleb=document.getElementById("styleb");
    console.log(mybutton.innerHTML);
     stylex=document.getElementById("test");
    stylex.style.borderBottom = "thin solid white";
    uploadb=document.getElementById("upload");
    refresh=document.getElementById("reload");
    
    ud={
        sent: 0,
        trans: -1,
        state:"dead"
    }
    
    send= {
        sent: 0,
        state:"dead"
    }
    ref=0;
    seeIt="Hidden";
    seeIt1="Visible";
    recieve={
        sent1:0,
        sent2:0,
        state1: "dead",
        state2: "dead"
    }
    doneSend=0;
    doneServ=0;
    doneRec=0;
    r1=0;
    r2=0;
    web2="off";
function btnclicked(e)
{
   // console.log("colca");
    if(web2==="off")
        {
   mybutton.innerHTML="De-activate";
            mybutton.setAttribute("class","btn btn-danger");
            web2="on";
            seeIt="visible";
            seeIt1="hidden";
            styleb.innerHTML="Modern Web Browsing";
            recProgress1.setAttribute("style","width:75%; visibility: "+seeIt);
            recProgress2.setAttribute("style","width:75%; visibility: "+seeIt);
             recieve.state1="alive";
           // rbtn(e);
        }

    else if(web2==="on")
        {
   mybutton.innerHTML="Activate";
            mybutton.setAttribute("class","btn btn-primary");
            web2="off";
            seeIt="hidden";
            seeIt1="visible";
            styleb.innerHTML="Old- Style browsing";
            recProgress1.setAttribute("style","width:75%; visibility: "+seeIt);
            recProgress2.setAttribute("style","width:75%; visibility: "+seeIt);
            
        }

}
    function upbtn(e)
{
    document.getElementById("t2").setAttribute("style","visibility: hidden");

    if(document.getElementById("mytext").value!=0)
    send.state="alive";
   
    
}
    function upbtn1(e)
{
    document.getElementById("t2").setAttribute("style","visibility: hidden");

    
    
}
    function rbt()
    {
       
        ud.state="alive";

    rbtn();
        
        
    }

    mybutton.addEventListener("click",btnclicked);
    uploadb.addEventListener("click",upbtn);
    uploadb.addEventListener("blur",upbtn1);
    refresh.addEventListener("click",rbt);
    

}
function rbtn(e)
    {
        
        
        l=document.getElementById("mylist")
        list=l.getElementsByTagName("li");
        
        for(var i=0;i<list.length;i++)
            {
                list[i].setAttribute("style","list-style-type:disc; display: list-item");
            }
    }
function draw(){
   sendProgress.setAttribute("style","width: "+send.sent+"%");
    recProgress1.setAttribute("style","width: "+recieve.sent1+"%; visibility: "+seeIt);
    recProgress2.setAttribute("style","width: "+recieve.sent2+"%; visibility: "+seeIt);
    recProgress3.setAttribute("style","width: "+ud.sent+"%; visibility: "+seeIt1+"; transform: scaleX("+ud.trans+");");
    tr.setAttribute("style","height: 5px; transform: scaleX("+ud.trans+");");
}
function update()
{
    if(ud.state==="alive")
        {
            
    if(ud.sent<=100)
        {
            ud.sent+=3;
        }
    else{
        
        ud.trans*=-1;
        ud.sent=0;
        
        
    
    if(ud.trans==-1)
        {
            
            ud.state="dead";
            rbtn();
        }
        }
        }
    if(send.state==="alive")
       {
           document.getElementById("t1").setAttribute("style","visibility: visible");
         send.sent++;
        sendProgress.setAttribute("visibility","visible");
       } 
    if(send.sent>=100)
        {
            doneSend=1;
            mytext=document.getElementById("mytext");
    
        
        var t=document.createElement('li');
        t.innerText=mytext.value;
            t.setAttribute("class","listElems myElems-fade");
            if(web2==="off")
                {
                    t.setAttribute("style","list-style-type:disc; display: none");
                }
            
        document.getElementById("t1").setAttribute("style","visibility: hidden");
            document.getElementById("t2").setAttribute("style","visibility: visible");
            send.state="dead";
            send.sent=0;
            
            document.getElementById("mylist").prepend(t);
        document.getElementById("mytext").value=""; 
        }
    
    if(recieve.state1==="alive")
        {
           if(web2==="on") document.getElementById("t3").setAttribute("style","visibility: visible");
            recieve.sent1+=2;
            if(recieve.sent1>=100)
            {
                recieve.state1="dead";
                r1=1;
                recieve.state2="alive";
                recieve.sent1=0;
                document.getElementById("t3").setAttribute("style","visibility: hidden")
                
        }
            
        }
    if(recieve.state2==="alive")
        {
           if(web2==="on")  document.getElementById("t4").setAttribute("style","visibility: visible");
            recieve.sent2+=2;
            doneRec=0;
            if(recieve.sent2>=100)
            {
                recieve.state2="dead";
                r2=1;
                recieve.state1="alive";
                recieve.sent2=0;
                if(web2==="on")
                rbtn(); document.getElementById("t4").setAttribute("style","visibility: hidden");
              
                
            }
            
        }
    
    
}
function gameLoop(){
    draw();
    update();
    console.log("In Game Loop");
    
    window.requestAnimationFrame(gameLoop);
}

init();
gameLoop(); 
