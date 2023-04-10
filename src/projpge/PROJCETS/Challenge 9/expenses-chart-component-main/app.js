"use strict";


import data from './data.json' assert { type: 'json' };
var heightArr = []
// data[0].day
var days = document.getElementsByClassName('barDefualt')
for(let i = 0;i<data.length;i++){
    var wid = data[i].amount/2
    days[i].style.height = wid + "mm"
    // days[i].style.height = wid + "%"
    heightArr.push(data[i].amount)
}

for(let i = 0;i<data.length;i++){
    if(((Math.max(...heightArr)/2)+"mm") == days[i].style.height){
        // days[i].style.color = "hsl(186, 34%, 60%)"
        days[i].classList.add("highBar")
    }
}
var pric = document.getElementsByClassName("price")
for(let i = 0;i<data.length;i++){
    var wid2 = data[i].amount/2
    pric[i].innerHTML = "$"+data[i].amount
    pric[i].style.bottom = (wid2 + 2)+ "mm"
    
}

function tovisble(e){
    var vible = document.getElementsByClassName("price")
    if(e.target.id == 'mon'){
        vible[0].classList.add("vsble")
    }else if (e.target.id == 'tue'){
        vible[1].classList.add("vsble")
    }else if (e.target.id == 'wed'){
        vible[2].classList.add("vsble")
    }else if (e.target.id == 'thu'){
        vible[3].classList.add("vsble")
    }else if (e.target.id == 'fri'){
        vible[4].classList.add("vsble")
    }else if (e.target.id == 'sat'){
        vible[5].classList.add("vsble")
    }else{
        vible[6].classList.add("vsble")
    }
}
function tonone(e){
    var vible = document.getElementsByClassName("price")
    if(e.target.id == 'mon'){
        vible[0].classList.remove("vsble")
    }else if (e.target.id == 'tue'){
        vible[1].classList.remove("vsble")
    }else if (e.target.id == 'wed'){
        vible[2].classList.remove("vsble")
    }else if (e.target.id == 'thu'){
        vible[3].classList.remove("vsble")
    }else if (e.target.id == 'fri'){
        vible[4].classList.remove("vsble")
    }else if (e.target.id == 'sat'){
        vible[5].classList.remove("vsble")
    }else{
        vible[6].classList.remove("vsble")
    }
}
var mon = document.getElementById("mon")
mon.addEventListener("mouseover",tovisble)
mon.addEventListener("mouseout",tonone)
var tue = document.getElementById("tue")
tue.addEventListener("mouseover",tovisble)
tue.addEventListener("mouseout",tonone)
var wed = document.getElementById("wed")
wed.addEventListener("mouseover",tovisble)
wed.addEventListener("mouseout",tonone)
var thu = document.getElementById("thu")
thu.addEventListener("mouseover",tovisble)
thu.addEventListener("mouseout",tonone)
var fri = document.getElementById("fri")
fri.addEventListener("mouseover",tovisble)
fri.addEventListener("mouseout",tonone)
var sat = document.getElementById("sat")
sat.addEventListener("mouseover",tovisble)
sat.addEventListener("mouseout",tonone)
var sun = document.getElementById("sun")
sun.addEventListener("mouseover",tovisble)
sun.addEventListener("mouseout",tonone)
