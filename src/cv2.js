var usrid = prompt("Enter Your ID NO:")
var dataid = ""
firebase.database().ref("entries").on("child_added",function(data){
    var data = data.val() 
    if(usrid == data.idey){
        dataid = data.idey
    var cvorm = document.getElementById("copcv")









    // var barsid = document.getElementById("barid").value
    // var bdata.sidelinesdid = document.getElementById("bdata.sidelinesdid").value

    // var mainsid = document.getElementById("mainid").value
    // var mainedid = document.getElementById("mainedid").value








    // GETTING ALL INPUTS-----------------------------------------------
    // var headside1 = document.getElementById("headside1").value
    // var headside2 = document.getElementById("headside2").value
    // var headside3 = document.getElementById("headside3").value
    // var headmain1 = document.getElementById("headmain1").value
    // var headmain2 = document.getElementById("headmain2").value
    // var headmain3 = document.getElementById("headmain3").value
    valArray=["Info","Skills","Hobbies","Interests","Courses"]
    valArray2=["Objective","Experience","Education","Personal Information","Skills & Abilities","Core Competencies","S.W.O.T"]
    // data.sidelines = []
    // data.mainlines = []
    // for(i=0;i<36;i++){
    //     inpo = i+1
    //     strID = "text"+inpo.toString()
    //     cvVal = document.getElementById(strID)
    // if(i<18){
    //     data.sidelines.push(cvVal.value)
    // }
    // else{
    //     data.mainlines.push(cvVal.value)
    // }
    // }


    // var head1inp2 = document.getElementsByClassName("headinp")[1].value
    // var head1inp3 = document.getElementsByClassName("headinp")[2].value
    // var head1inp4 = document.getElementsByClassName("headinp")[3].value
    // var head1inp5 = document.getElementsByClassName("headinp")[4].value

    // var head2inp1 = document.getElementsByClassName("headinp")[5].value
    // var head2inp2 = document.getElementsByClassName("headinp")[6].value
    // var head2inp3 = document.getElementsByClassName("headinp")[7].value
    // var head2inp4 = document.getElementsByClassName("headinp")[8].value
    // var head2inp5 = document.getElementsByClassName("headinp")[9].value
    
    // var head3inp1 = document.getElementsByClassName("headinp")[10].value
    // var head3inp2 = document.getElementsByClassName("headinp")[11].value
    // var head3inp3 = document.getElementsByClassName("headinp")[12].value
    // var head3inp4 = document.getElementsByClassName("headinp")[13].value
    // var head3inp5 = document.getElementsByClassName("headinp")[14].value

    // var head1m1 = document.getElementsByClassName("headm")[0].value
    // var head1m2 = document.getElementsByClassName("headm")[1].value
    // var head1m3 = document.getElementsByClassName("headm")[2].value
    // var head1m4 = document.getElementsByClassName("headm")[3].value
    // var head1m5 = document.getElementsByClassName("headm")[4].value

    // var head2m1 = document.getElementsByClassName("headm")[5].value
    // var head2m2 = document.getElementsByClassName("headm")[6].value
    // var head2m3 = document.getElementsByClassName("headm")[7].value
    // var head2m4 = document.getElementsByClassName("headm")[8].value
    // var head2m5 = document.getElementsByClassName("headm")[9].value

    // var head3m1 = document.getElementsByClassName("headm")[10].value
    // var head3m2 = document.getElementsByClassName("headm")[11].value
    // var head3m3 = document.getElementsByClassName("headm")[12].value
    // var head3m4 = document.getElementsByClassName("headm")[13].value
    // var head3m5 = document.getElementsByClassName("headm")[14].value


// valArray = [
//     [headside1,head1inp1,head1inp2,head1inp3,head1inp4,head1inp5],
//     [headside2,head2inp1,head2inp2,head2inp3,head2inp4,head2inp5],
//     [headside3,head3inp1,head3inp2,head3inp3,head3inp4,head3inp5]
// ]
// valArray2 = [
//     [headmain1,head1m1,head1m2,head1m3,head1m4,head1m5],
//     [headmain2,head2m1,head2m2,head2m3,head2m4,head2m5],
//     [headmain3,head3m1,head3m2,head3m3,head3m4,head3m5]
// ]

var div1 = document.createElement("div")
div1.setAttribute("class","container basecont")


var div11 = document.createElement("div")
div11.setAttribute("class","sidedbar")
div1.appendChild(div11)
// console.log(div11)

var div12 = document.createElement("div")
div12.setAttribute("class","sidedbar2")
div1.appendChild(div12)



var divimg = document.createElement("div")
divimg.setAttribute("class","resimgmoc")
divimg.setAttribute("id","idimg")
div11.appendChild(divimg)


var br = document.createElement("br")
div11.appendChild(br)

var br2 = document.createElement("br")
div11.appendChild(br2)




var flag = true


k = 0
v = 4
for(i=0;i<valArray.length;i++){
    var hr1 = document.createElement("hr")
    hr1.setAttribute("class","gaped")
    div11.appendChild(hr1)
    

    var h31 = document.createElement("h3")
    h31.setAttribute("class","sidedhead forfont")
    var valNode1 = document.createTextNode(valArray[i]) 
    h31.appendChild(valNode1)
    div11.appendChild(h31)
    
    if(i == 1){
        flag = false
        var per = document.createElement("p")
        var perNode = document.createTextNode("I have strong command on the following:")
        per.setAttribute('class','forfont')
        per.appendChild(perNode)
        div11.appendChild(per)
        
    }
    
    var ulist1 = document.createElement("ul")
    ulist1.setAttribute("class","listed")
    for(j=0;j<v;j++){
        var list1 = document.createElement("li")
        list1.setAttribute('class','forfont')
        var valNode = document.createTextNode(data.sidelines[k]) 
        list1.appendChild(valNode)
        ulist1.appendChild(list1)
        k++
    }
    if(v == 4 ){
        v = 5
    }
    else if (v == 5){
        v = 3
    }
    div11.appendChild(ulist1)
}
var hr1 = document.createElement("hr")
hr1.setAttribute("class","gaped")
div11.appendChild(hr1)








v = 1
k = 0
p = 0
for(i=0;i<valArray2.length;i++){    
    var h31 = document.createElement("h3")
    h31.setAttribute("class","sidedhead2 forfont")
    var valNode2 = document.createTextNode(valArray2[i]) 
    h31.appendChild(valNode2)
    div12.appendChild(h31)
    if(p==0){
        v = 1
    }
    else if(p < 4){
        v = 3
    }
    else if(p < 5){
        v = 8
    }
    else if(p < 6){
        v = 3
    }
    else if(p < 7){
        v = 4
    }
    
    var ulist1 = document.createElement("ul")
    ulist1.setAttribute("class","listed")
    for(j=0;j<v;j++){
        var list1 = document.createElement("li")
        list1.setAttribute('class','forfont')
        var valNode = document.createTextNode(data.mainlines[k]) 
        list1.appendChild(valNode)
        ulist1.appendChild(list1)
        k++
    }
    p++
    
    var hr1 = document.createElement("hr")
    hr1.setAttribute("class","gaped")
    div12.appendChild(ulist1)
    div12.appendChild(hr1)
}
cvorm.appendChild(div1)
document.querySelector("#idimg").style.backgroundImage = 'url('+ data.img[0] +')'
}



}
)
// if(usrid !== dataid){
//     alert("Not Found")
// }


function changefont(){
    var font = document.querySelector("#fonts").value
    for(i = 0; i<60;i++){
        var elemnts = document.getElementsByClassName("forfont")[i]
        elemnts.style.fontFamily = font
        // console.log(elemnts[i])
    }
}
var changefonts = document.querySelector("#fonts")
changefonts.addEventListener('click',changefont)

function printed(){
    let divhide = document.querySelector("#hidekaro")
    divhide.style.display = "none";
    print()
}
var printbtn = document.getElementById("printbtn")
printbtn.addEventListener('click',printed)