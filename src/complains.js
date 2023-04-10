var buttn = document.querySelector("#formsubitbtn")
try{
buttn.addEventListener("click",myfunc)
}catch(err){
    console.log(err)
}
var key1s = 0
var key2s = 0
var key3s = 0
var key4s = 0
var key5s = 0
var keycount =key5s +"" + key4s +""+key3s+""+key2s+""+key1s

var complainsection = document.querySelector("#complainssec")

function myfunc(){
    
    console.log(key1s,key2s,key3s,key4s,key5s)
    key1s++
    if(key1s > 9){
        key1s = 0
        key2s++
    }else if(key2s > 9){
        key2s = 0
        key3s++
    }else if(key3s > 9){
        key3s = 0
        key4s++
    }else if(key4s > 9){
        key4s = 0
        key5s++
    }
    var keycount = key5s +"" + key4s +""+key3s+""+key2s+""+key1s
    var complainObj ={}
    for(i=0;i<4;i++){
        
        var a = document.getElementsByClassName("response")[i]
        if(i==0){
            complainObj["name"] = a.value
        }else if(i == 1){
            complainObj["number"] = a.value
        }else if(i == 2){
            complainObj["subject"] = a.value
        }else{
            complainObj["message"] = a.value
        }
        a.value = ''
        
    }
    complainObj['key'] = keycount
    console.log(complainObj)
    var database = firebase.database().ref("complains")
    database.child("Complain"+keycount).set(complainObj)
}
cardno = 1

firebase.database().ref("complains").on("child_added",function(data){
var data = data.val()    
keycount = data.key
key1s = keycount[4]
key2s = keycount[3]
key3s = keycount[2]
key4s = keycount[1]
key5s = keycount[0]



var cardbase = document.createElement("div")
cardbase.setAttribute("class","card")
cardbase.classList.add("text-white")
cardbase.classList.add("bg-dark")
cardbase.classList.add("mb-3")
cardbase.setAttribute("style","maxwidth: 100rem")


var cardhead = document.createElement("div")
var cardheadNode = document.createTextNode("Complain No: " + cardno)
cardhead.setAttribute("class","card-header")
cardhead.appendChild(cardheadNode)

cardbase.appendChild(cardhead)

var cardbody = document.createElement("div")
cardbody.setAttribute("class","card-body")
cardbody.setAttribute("id","compcard")



var cardsect = document.createElement("h3")
cardsect.setAttribute("class","class-title")
var carddata = document.createTextNode("Name: " + data.name)
cardsect.appendChild(carddata)

cardbody.appendChild(cardsect)

var cardsect2 = document.createElement("h3")
cardsect2.setAttribute("class","class-title")
var carddata2 = document.createTextNode("Whatsapp No: " + data.number)
    cardsect2.appendChild(carddata2)
    
    cardbody.appendChild(cardsect2)
    
    var cardsect3 = document.createElement("h3")
    cardsect3.setAttribute("class","class-title")
    var carddata3 = document.createTextNode("Subject: " + data.subject)
    cardsect3.appendChild(carddata3)
    
    cardbody.appendChild(cardsect3)
    
    var cardsect4 = document.createElement("p")
    cardsect4.setAttribute("class","class-text")
    var carddata4 = document.createTextNode(data.message)
    cardsect4.appendChild(carddata4)
    
    cardbody.appendChild(cardsect4)
    
    cardbase.appendChild(cardbody)
    
    console.log(cardbase)
    console.log(complainsection)
    
    complainsection.appendChild(cardbase)
    
    cardno++
})



var clearbtn = document.querySelector("#formclearbtn")
try{
clearbtn.addEventListener("click",function clearfun(){
    for(i=0;i<4;i++){
        var a = document.getElementsByClassName("response")[i]
        a.value = ''
}}
)
}catch(err){
    console.log(err)
}
