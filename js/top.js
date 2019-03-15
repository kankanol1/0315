window.addEventListener('resize',function(){
    var html = document.documentElement;
    var htmlW = html.getBoundingClientRect().width;
    html.style.fontSize = htmlW/15 + "px";
},false);

var html = document.documentElement;
var htmlW = html.getBoundingClientRect().width;
html.style.fontSize = htmlW/20 + "px";



