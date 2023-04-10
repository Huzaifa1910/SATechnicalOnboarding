function security(){
    var nmeS = prompt("User ID?")
    if(nmeS === "admin"){
        var pwdS = prompt("Enter Passcode")
        if(pwdS === "0000"){
            alert("Access Granted")
        }
        else{
            alert("Access Denied")
            location.reload()
        }
        
        
    }
    else{
        alert("Access Denied")
        location.reload()
    }


}
security()