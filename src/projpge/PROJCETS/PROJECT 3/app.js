var menu1 = document.getElementById("menuitems");

menu1.style.maxHeight = "0px";

function menutoggle(){
    if(menu1.style.maxHeight == "0px")
    {
        menu1.style.maxHeight = "200px"
    }else{
        menu1.style.maxHeight = "0px"
    }
}