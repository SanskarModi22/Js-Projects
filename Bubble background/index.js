for(var i=1;i<=25;i++){
    var bubbleid="#bub"+i+"";
    var item=document.querySelector(bubbleid);
    var size=""+Math.round(Math.random()*150+1)+"px";
    console.log(size);
    item.style.width=size;
    item.style.height=size;
    item.style.top=""+Math.random()*100+"vh";
    item.style.left=""+Math.random()*100+"vw";
}
function resize() {
    for(var i=1;i<=25;i++){
        var bubbleid="#bub"+i+"";
        var item=document.querySelector(bubbleid);
        var size=""+Math.round(Math.random()*150+1)+"px";
        console.log(size);
        item.style.width=size;
        item.style.height=size;
        item.style.top=""+Math.random()*100+"vh";
        item.style.left=""+Math.random()*100+"vw";
    }
}
setInterval(resize,8000);