function change(){
    var open = document.getElementById("open");
    var menu = document.getElementById("menu");
    menu.style.transform="scaleY(1)"
    open.style.visibility = "hidden";
}
function changeopen(){
    var close = document.getElementById("btn");
    var open = document.getElementById("open");
    var menu = document.getElementById("menu");
    menu.style.transform="scaleY(0)"
    open.style.visibility = "visible";
}