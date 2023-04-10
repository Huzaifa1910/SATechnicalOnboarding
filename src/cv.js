function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}


var id = "entry"
var key1 = 0
var key2 = 0
var key3 = 0
var key4 = 0
var key5 = 0
var keycount =key5 +"" + key4 +""+key3+""+key2+""+key1
function addhead(){

    key1++
    if(key1 > 9){
        key1 = 0
        key2++
    }else if(key2 > 9){
        key2 = 0
        key3++
    }else if(key3 > 9){
        key3 = 0
        key4++
    }else if(key4 > 9){
        key4 = 0
        key5++
    }
    var keycount =key5 +"" + key4 +""+key3+""+key2+""+key1

// pushing content
// var cvorm = document.getElementById("copcv")









    // var barsid = document.getElementById("barid").value
    // var baredid = document.getElementById("baredid").value

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
    are = []
    are2 = []
    for(i=0;i<43;i++){
        inpo = i+1
        strID = "text"+inpo.toString()
        cvVal = document.getElementById(strID)
    if(i<18){
        are.push(cvVal.value)
    }
    else{
        are2.push(cvVal.value)
    }
    }
    console.log(are2)


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

// var div1 = document.createElement("div")
// div1.setAttribute("class","container basecont")


// var div11 = document.createElement("div")
// div11.setAttribute("class","sidedbar")
// div1.appendChild(div11)
// // console.log(div11)

// var div12 = document.createElement("div")
// div12.setAttribute("class","sidedbar2")
// div1.appendChild(div12)



// var divimg = document.createElement("div")
// divimg.setAttribute("class","resimgmoc")
// divimg.setAttribute("id","idimg")
// div11.appendChild(divimg)

// var br = document.createElement("br")
// div11.appendChild(br)

// var br2 = document.createElement("br")
// div11.appendChild(br2)




// // var flag = true


// k = 0
// v = 4
// for(i=0;i<valArray.length;i++){
//     var hr1 = document.createElement("hr")
//     hr1.setAttribute("class","gaped")
//     div11.appendChild(hr1)


//     var h31 = document.createElement("h3")
//     h31.setAttribute("class","sidedhead")
//     var valNode1 = document.createTextNode(valArray[i]) 
//     h31.appendChild(valNode1)
//     div11.appendChild(h31)

    
//     var ulist1 = document.createElement("ul")
//     ulist1.setAttribute("class","listed")
//     for(j=0;j<v;j++){
//         var list1 = document.createElement("li")
//         var valNode = document.createTextNode(are[k]) 
//         list1.appendChild(valNode)
//         ulist1.appendChild(list1)
//         k++
//     }
//     if(v == 4 ){
//         v = 5
//     }
//     else if (v == 5){
//         v = 3
//     }
//     div11.appendChild(ulist1)
// }
// var hr1 = document.createElement("hr")
// hr1.setAttribute("class","gaped")
// div11.appendChild(hr1)








// v = 1
// k = 0
// p = 0
// for(i=0;i<valArray2.length;i++){    
//     var h31 = document.createElement("h3")
//     h31.setAttribute("class","sidedhead2")
//     var valNode2 = document.createTextNode(valArray2[i]) 
//     h31.appendChild(valNode2)
//     div12.appendChild(h31)
//     if(p==0){
//         v = 1
//     }
//     else if(p < 4){
//         v = 3
//     }
//     else{
//         v = 8
//     }
    
//     var ulist1 = document.createElement("ul")
//     ulist1.setAttribute("class","listed")
//     for(j=0;j<v;j++){
//         var list1 = document.createElement("li")
//         var valNode = document.createTextNode(are2[k]) 
//         list1.appendChild(valNode)
//         ulist1.appendChild(list1)
//         k++
//     }
//     p++
    
//     var hr1 = document.createElement("hr")
//     hr1.setAttribute("class","gaped")
//     div12.appendChild(ulist1)
//     div12.appendChild(hr1)
// }
// cvorm.appendChild(div1)
const imgs2 = document.querySelector("#cvimg")
const imgs = document.querySelector("#slick")
var upimg = "";
var objs = {}
objs["sidelines"] = are
objs["mainlines"]= are2
console.log(objs["mainlines"])
objs["key"] = keycount
objs["idey"] = randomString(6)
imgs.addEventListener("click", function(){
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        upimg = reader.result;
        document.querySelector("#idimg").style.backgroundImage = 'url('+ upimg +')'
    })
    reader.readAsDataURL(imgs2.files[0]);
    
})
document.getElementById("slick").onclick = function(){
    var ImgName = document.getElementById("cvimg").value
    var uploadTask = firebase.storage().ref("Images/"+ImgName+".png").put(imgs2.files[0])

    uploadTask.on("state_changed", function(snapshot){
        var progs = (snapshot.bytesTransferred / snapshot.totalBytes)*100
        uploadTask.snapshot.ref.getDownloadURL().then(function(url){
        var ImgUrl = url
        objs["img"] = [url]
        console.log(ImgUrl,"hello")
        if(objs["img"] != ""){
            var database = firebase.database().ref("entries")
            database.child("entry"+keycount).set(objs)
            chngurl()
        }else{
            alert("Image is not attached")
        }
    },
    );
    });
    };
    document.getElementById("idcv").innerHTML = objs.idey
    var copybtn = document.getElementsByClassName("copybtn")[0]
    var display = getComputedStyle(copybtn).display;
    if (display == "none") {
        copybtn.style.display = "block";
    }
// alert("Your CV ID is: " + "\n" + objs.idey)
}




firebase.database().ref("entries").on("child_added",function(data){
    var data = data.val()    
    keycount = data.key
    key1 = keycount[4]
    key2 = keycount[3]
    key3 = keycount[2]
    key4 = keycount[1]
    key5 = keycount[0]
})
// console.log(headside1,headside2,headside3,headmain1,headmain2,headmain3,head1inp1,head1inp2,head1inp3,head1inp4,head1inp5)

// var hr1 = document.createElement("hr")
// hr1.setAttribute("class","gaped")
// div11.appendChild(hr1)


// var h31 = document.createElement("h3")
// h31.setAttribute("class","sidedhead")
// div11.appendChild(h31)




// var per = document.createElement("p")
// var perNode = document.createTextNode("I have strong command on the following:")

// per.appendChild(perNode)
// div11.appendChild(per)

// var ulist1 = document.createElement("ul")
// ulist1.setAttribute("class","listed")
// var list1 = document.createElement("li")

// ulist1.appendChild(list1)
// div11.appendChild(ulist1)





// var hr1 = document.createElement("hr")
// hr1.setAttribute("class","gaped")
// div11.appendChild(hr1)


// var h31 = document.createElement("h3")
// h31.setAttribute("class","sidedhead")
// div11.appendChild(h31)

// var ulist1 = document.createElement("ul")
// ulist1.setAttribute("class","listed")
// var list1 = document.createElement("li")

// ulist1.appendChild(list1)
// div11.appendChild(ulist1)
// // console.log(div12)






// var hr1 = document.createElement("hr")
// hr1.setAttribute("class","gaped")
// div11.appendChild(hr1)


// var h31 = document.createElement("h3")
// h31.setAttribute("class","sidedhead")
// div11.appendChild(h31)

// var ulist1 = document.createElement("ul")
// ulist1.setAttribute("class","listed")
// var list1 = document.createElement("li")

// ulist1.appendChild(list1)
// div11.appendChild(ulist1)




// var hr1 = document.createElement("hr")
// hr1.setAttribute("class","gaped")
// div11.appendChild(hr1)


// var h31 = document.createElement("h3")
// h31.setAttribute("class","sidedhead")
// div11.appendChild(h31)

// var ulist1 = document.createElement("ul")
// ulist1.setAttribute("class","listed")
// var list1 = document.createElement("li")

// ulist1.appendChild(list1)
// div11.appendChild(ulist1)






function addform(){
    var cvv = document.getElementById("cvv")
    var barsid = document.getElementById("barid").value
    var baredid = document.getElementById("baredid").value
    
    var headed = document.createElement("h2")
    var headnode = document.createTextNode("For Sidebar")
    headed.setAttribute("class","headttl")
    headed.appendChild(headnode)
    cvv.appendChild(headed)
    for(i=0;i<barsid;i++){
        var foside = document.createElement("form")
        var inputs = document.createElement("input")
        var foside2 = document.createElement("form")
        
        inputs.setAttribute("type","text")
        inputs.setAttribute("class","headinp")
        inputs.setAttribute("placeholder","Heading")
        
        for(j=0;j<baredid;j++){
            var inputs2 = document.createElement("input")
            inputs2.setAttribute("type","text")
            inputs2.setAttribute("class","headinp")
            inputs2.setAttribute("placeholder","Type Content")
            foside2.appendChild(inputs2)
        }
        
        var hr1 = document.createElement("hr")
        hr1.setAttribute("class","gaped")
        foside.appendChild(hr1)
        foside.appendChild(inputs)
        foside.appendChild(foside2)
        cvv.appendChild(foside)
    }
    
    
    
    
    var mainsid = document.getElementById("mainid").value
    var mainedid = document.getElementById("mainedid").value

    var headed = document.createElement("h2")
    var headnode = document.createTextNode("For MainBar")
    headed.setAttribute("class","headttl")
    headed.appendChild(headnode)
    cvv.appendChild(headed)

    for(i=0;i<mainsid;i++){
        var foside = document.createElement("form")
        var inputs = document.createElement("input")
        var foside2 = document.createElement("form")
        
        inputs.setAttribute("type","text")
        inputs.setAttribute("class","headm")
        inputs.setAttribute("placeholder","Heading")
        
        for(j=0;j<mainedid;j++){
            var inputs2 = document.createElement("input")
            inputs2.setAttribute("type","text")
            inputs2.setAttribute("class","headm")
            inputs2.setAttribute("placeholder","Type Content")
            foside2.appendChild(inputs2)
        }
        
        var hr1 = document.createElement("hr")
        hr1.setAttribute("class","gaped")
        foside.appendChild(hr1)
        foside.appendChild(inputs)
        foside.appendChild(foside2)
        cvv.appendChild(foside)
    }

}

function tocheck(){
    are = []
    are2 = []
for(i=0;i<29;i++){
    inpo = i+1
    strID = "text"+inpo.toString()
    cvVal = document.getElementById(strID)
    if(i<14){
    are.push(cvVal.value)
}
else{
    are2.push(cvVal.value)
}
}
}



const imgs = document.querySelector("#cvimg")
var upimg = "";
imgs.addEventListener("change", function(){
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        window.upimg = reader.result;
        document.querySelector("#dispimg").style.backgroundImage = 'url('+ upimg +')'
        // document.querySelector("#idimg").style.backgroundImage = 'url('+ window.upimg +')'
    })
    reader.readAsDataURL(this.files[0]);

})

function chngurl(){
    // window.location.assign("./cv.html")
    window.open(
        'cv.html',
        '_blank' // <- This is what makes it open in a new window.
      );
      
}
// console.log(firebase)
$(document).ready(function(){
    $('#copyBtn').click(function(){

        var text = $("#idcv").get(0)
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
        //add to clipboard.
        document.execCommand('copy');
    })
});
