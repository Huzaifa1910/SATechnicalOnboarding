var x = document.getElementById("login")
var y = document.getElementById("register")
var z = document.getElementById("btn")
// var x2 = document.getElementById("login2")
// var y2 = document.getElementById("register2")
// var z2 = document.getElementById("btn2")
// console.log(doorhei)
// if(doorhei < shelfhei){
    //     console.log(shelfhei)
// }

// function incHeight() {
//     var el = document.getElementsByClassName("door-wrap")[0];
//     var el2 = document.getElementsByClassName("catshelf")[0];
//     var doorheight = el.offsetHeight;
//     var shelfheight = el2.offsetHeight;
//         var newdoorheight = doorheight;
//         var newshelfheight = shelfheight - 525;
//         el.style.height = newshelfheight + "px";
//         // incHeight()
//     }
    
    function register(){
        x.style.left = "-400px"
        y.style.left = "50px"
        if(z.offsetWidth<100){
            z.style.left = "90px"
    }else{
        z.style.left = "110px"
    }
}
function login(){
    x.style.left = "50px"
    y.style.left = "450px"
    z.style.left = "0px"
}
//     function register2(){
//         x2.style.left = "-400px"
//         y2.style.left = "50px"
//         if(z2.offsetWidth<100){
//             z2.style.left = "90px"
//     }else{
//         z2.style.left = "110px"
//     }
// }
// function login2(){
//     x2.style.left = "50px"
//     y2.style.left = "450px"
//     z2.style.left = "0px"
// }
// -------------------------BLOG PAGE-------------------------
var authid = document.getElementById("Authnme")

var date = document.getElementById("dte")


var titlenme = document.getElementById("blgnme")

var titlediv = document.getElementById("blg-crtr")

var imge = document.getElementById("blgpic")

var imgnums = document.getElementById("imgnum")
// var imggo = document.getElementById("blg-crtr")


var descript = document.getElementById("blgtext")

// var script = document.getElementById("blg-crtr")

// var kingo = JSON.parse(localStorage.getItem("kingF"));
var tarr = 0 
// console.log(king)
// imp2.push(mkr)
kingo = 1 + JSON.parse(localStorage.getItem("kingF"));
king =  kingo
var blgnums = document.getElementById("blgnum")


imp = JSON.parse(localStorage.getItem("kingF"));
function blogtitle(){
    
    if(blgnums.value != 1){
        mkr2 = JSON.parse(localStorage.getItem(imp));
        
    }
    king =  kingo
    
    var a = titlenme.value
    var b = descript.value
    var c = imge.value
    var imgnumsx = imgnums.value
    var authids = authid.value
    var datesx = date.value
    var blogs = blgnums.value
    
    mkr["blogtitle"] = a
    mkr["blogdescription"]= b
    mkr["blogimage"] = c
    mkr["imgpos"] = imgnumsx
    mkr["authids"] = authids
    mkr["dates"] = datesx
    mkr["blog"] = blogs
    mkr2.push(mkr)
    
    localStorage.setItem(king,JSON.stringify(mkr2))
    
    var mkr3 = JSON.parse(localStorage.getItem(king))
    var newdiv1 = document.createElement("div")
    newdiv1.setAttribute("class","blogmain")
    
    var newdiv2 = document.createElement("div")
    
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","mnline")
    newdiv1.appendChild(newdiv);
    // var newimg = document.createElement("div");
    
    
    // titlediv.appendChild(newdiv1);
    // imggo.appendChild(newdiv1);
    // script.appendChild(newdiv1);
    // line.appendChild(newdiv1);
    
    kingo++
    titlediv.appendChild(newdiv1);
    // imggo.appendChild(newdiv);
    // script.appendChild(newdiv);
    
    // for (i=0 ; i<blgarr.length; i++){
        
        // }
        localStorage.setItem(king,JSON.stringify(mkr2))
        var imgval = mkr3[tarr].blogimage;
        var imgtextnode = document.createTextNode(imgval);
        var image = document.createElement("img");
        if(imgnumsx==1){
            image.setAttribute("class","forimg1")
            
        }
        else if(imgnumsx==2){
            image.setAttribute("class","forimg2")
            
        }
        
        image.setAttribute("width","50%");
        image.src = imgval;
        image.appendChild(imgtextnode);
        newdiv2.appendChild(image);
        newdiv.appendChild(newdiv2)
        
        
        var spn = document.createElement("span")
        spn.setAttribute("id","details")
        
        var ital = document.createElement("i")
        
        ital.appendChild(spn)
        newdiv2.appendChild(ital)

        
        var author = mkr3[tarr].authids
        var authornode = document.createTextNode("Author: " + author + " |")
        var authU = document.createElement("u")
        var authH = document.createElement("h6")
        authH.appendChild(authU)
        authU.appendChild(authornode)
        spn.appendChild(authH)

        
        var datess = mkr3[tarr].dates
        var datesnode = document.createTextNode("| "+ "Date: " +datess)
        var datesU = document.createElement("u")
        var datesH = document.createElement("h6")
        datesH.appendChild(datesU)
        datesU.appendChild(datesnode)
        spn.appendChild(datesH)
        
        
        
        
        var text = mkr3[tarr].blogtitle;
        var finalText = document.createTextNode(text);
        var list = document.createElement("h1");
        list.appendChild(finalText);
        newdiv.appendChild(list);

        
        
        var desc1 = mkr3[tarr].blogdescription;
        var desc1textnode = document.createTextNode(desc1);
        var desc = document.createElement("p")
        desc.setAttribute("class","blog-pera")
        desc.appendChild(desc1textnode);
        newdiv.appendChild(desc);
        tarr++;
        //     console.log(mkr2)
    // console.log(mkr3)
    localStorage.setItem("kingF",JSON.stringify(king))
    mkr = {};
    location.reload()
    
}

function nmcal(){
    var fnme = document.getElementById("nme1inp").value
    var lnme = document.getElementById("nme2inp").value
    var eml = document.getElementById("emailinp").value
    var nums = document.getElementById("numinp").value
    var msgs = document.getElementById("msginp").value
    console.log(fnme + lnme + eml + nums + msgs)
    
}
function forbod(){
    var king1 = JSON.parse(localStorage.getItem("kingF"));
    
    mkr3 = JSON.parse(localStorage.getItem(king1));
    for (i=mkr3.length-1 ; i>=0; i--){
        var newdiv1 = document.createElement("div")
        newdiv1.setAttribute("class","blogmain")
        
        var newdiv2 = document.createElement("div")
        
        var newdiv = document.createElement("div");
        newdiv.setAttribute("class","mnline")
        newdiv1.appendChild(newdiv);
        // var newimg = document.createElement("div");
        
        
        // titlediv.appendChild(newdiv1);
        // imggo.appendChild(newdiv1);
        // script.appendChild(newdiv1);
        // line.appendChild(newdiv1);
        
        kingo++
        titlediv.appendChild(newdiv1);
        // imggo.appendChild(newdiv);
        // script.appendChild(newdiv);
        
        // for (i=0 ; i<blgarr.length; i++){
            
            // }
            var spn = document.createElement("span")
            spn.setAttribute("id","details")
            
            var ital = document.createElement("i")
            
            ital.appendChild(spn)
        newdiv2.appendChild(ital)

        
        var author = mkr3[i].authids
        var authornode = document.createTextNode("Author: " + author + " |")
        var authU = document.createElement("u")
        var authH = document.createElement("h6")
        authH.appendChild(authU)
        authU.appendChild(authornode)
        spn.appendChild(authH)
        

        var datess = mkr3[i].dates
        var datesnode = document.createTextNode("| "+ "Date: " +datess)
        var datesU = document.createElement("u")
        var datesH = document.createElement("h6")
        datesH.appendChild(datesU)
        datesU.appendChild(datesnode)
        spn.appendChild(datesH)

        
        var imgval = mkr3[i].blogimage;
        var imgnumsx = mkr3[i].imgpos;
        var imgtextnode = document.createTextNode(imgval);
        var image = document.createElement("img");
        if(imgnumsx==1){
            image.setAttribute("class","forimg1")
            
        }
        else if(imgnumsx==2){
            image.setAttribute("class","forimg2")
            
        }
        image.setAttribute("width","50%");
        image.src = imgval;
        image.appendChild(imgtextnode);
        newdiv2.appendChild(image);
        newdiv.appendChild(newdiv2)
        
        var text = mkr3[i].blogtitle;
        var finalText = document.createTextNode(text);
        var list = document.createElement("h1");
        list.appendChild(finalText);
        newdiv.appendChild(list);
        
        var desc1 = mkr3[i].blogdescription;
        var desc1textnode = document.createTextNode(desc1);
        var desc = document.createElement("p")
        desc.setAttribute("class","blog-pera")
        desc.appendChild(desc1textnode);
        newdiv.appendChild(desc);}
        
    }
    
    var blgarr = [
        {
        blogtitle: "My very first blog",
        blogimage:"pexels-pixabay-159775.jpg",
        blogdescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore recusandae iusto quas nulla fugiat rerum! Iure accusamus earum quod sint quae magni eius aliquam velit maxime, impedit esse reprehenderit.",
    },
    {
        blogtitle: "My second blog",
        blogimage:"pexels-pixabay-159775.jpg",
        blogdescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore recusandae iusto quas nulla fugiat rerum! Iure accusamus earum quod sint quae magni eius aliquam velit maxime, impedit esse reprehenderit.",
    },
    {
        blogtitle: "My third blog",
        blogimage:"pexels-pixabay-159775.jpg",
        blogdescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore recusandae iusto quas nulla fugiat rerum! Iure accusamus earum quod sint quae magni eius aliquam velit maxime, impedit esse reprehenderit.",
    },
]

function blging(e){
    var titlediv = document.getElementById("blgmain");
    titlediv.innerHTML = blgarr[e].blogtitle;
}
var mkr2 = []
var mkr = {};
function titlepush(){
    // mkr.push(a,b)
    // mkr.prop === mkr['prop'];
    var a = titlenme.value
    var b = descript.value
    var c = imge.value
    mkr["blogtitle"] = a
    mkr["blogdescription"]= b
    mkr["blogimage"] = c
    console.log(mkr)
    mkr2.push(mkr)
    console.log(mkr2)
    
    mkr = {};
}


// function blogtitle(){
    //     // mkr2 = JSON.parse(localStorage.getItem(imp));
    //     king =  kingo
    
    //     var a = titlenme.value
//     var b = descript.value
//     var c = imge.value
//     mkr["blogtitle"] = a
//     mkr["blogdescription"]= b
//     mkr["blogimage"] = c
//     mkr2.push(mkr)

//     localStorage.setItem(king,JSON.stringify(mkr2))

//     var mkr3 = JSON.parse(localStorage.getItem(king))
//     var newdiv1 = document.createElement("div");


//     var newdiv = document.createElement("div");
//     var newimg = document.createElement("div");
//     var newscr = document.createElement("div");
//     var hr = document.createElement("hr");
//     hr.setAttribute("class","line1");

//     newdiv1.appendChild(newdiv);
//     newdiv1.appendChild(newimg);
//     newdiv1.appendChild(newscr);
//     newdiv1.appendChild(hr);

//     titlediv.appendChild(newdiv1);
//     imggo.appendChild(newdiv1);
//     script.appendChild(newdiv1);
//     line.appendChild(newdiv1);

//     kingo++
//     // titlediv.appendChild(newdiv);
//     // imggo.appendChild(newimg);
//     // script.appendChild(newscr);
//     // line.appendChild(hr);

//     // for (i=0 ; i<blgarr.length; i++){
    
    //         // }
    //         var text = mkr3[tarr].blogtitle;
    //         var finalText = document.createTextNode(text);
    //         var list = document.createElement("h2");
    //         list.appendChild(finalText);
    //         newdiv.appendChild(list);
    
    //         var imgval = mkr3[tarr].blogimage;
    //         var imgtextnode = document.createTextNode(imgval);
    //         var image = document.createElement("img");
    //         image.setAttribute("width","50%");
    //         image.src = imgval;
    //         image.appendChild(imgtextnode);
    //         newimg.appendChild(image);

    //         var desc1 = mkr3[tarr].blogdescription;
    //         var desc1textnode = document.createTextNode(desc1);
    //         var desc = document.createElement("p")
    //         desc.appendChild(desc1textnode);
    //         newscr.appendChild(desc);
    //         tarr++;
    //         console.log(mkr2)
    //     console.log(mkr3)
//     localStorage.setItem("kingF",JSON.stringify(king))
//     mkr = {};

// }


var doorhei = document.getElementsByClassName("door-wrap")[0].clientHeight
var shelfhei = document.getElementsByClassName("catshelf")[0].clientHeight

// ----------------HOME PAGE----------------

var bookkarrr = [
    {
        booknme: "harry potter",
        sloganline: "prisoner of azkaben",
        tilt: "yes",
        colorofbook: "book book-umber",
        bookpath: "books/ICS PP.pdf"
    },
    {
        booknme: "harry potter",
        sloganline: "prisoner of azkaben",
        tilt: "yes",
        colorofbook: "book book-green",
        bookpath: "books/ICS PP.pdf"
    },
    {
        booknme: "harry potter",
        sloganline: "prisoner of azkaben",
        tilt: "yes",
        colorofbook: "book book-blue",
        bookpath: "books/ICS PP.pdf"
    },
]
var catclass = document.getElementById("cat-nme");
var book =  document.getElementById("booknme");
var sbtlebook = document.getElementById("subtlebook");
var clrbook = document.getElementById("bookclass");
var tilted = document.getElementById("tilted")
var pdfx = document.getElementById("pdfselect")
var booknum = document.getElementById("booknum")
var newback = document
var bookobj = {}
var bookarr = []
function addbook(){
    if(catclass.value == "bookshelf1"){
        var shelf = document.getElementsByClassName("bookshelf1")[0];
        bookobj["BookCategory"] = "Animation"
        bookobj["Bookshelf"] =  catclass.value
    }if(catclass.value == "bookshelf2"){
        var shelf = document.getElementsByClassName("bookshelf2")[0];
        bookobj["BookCategory"] = "Comics"
        bookobj["Bookshelf"] =  catclass.value
    }if(catclass.value == "bookshelf3"){
        var shelf = document.getElementsByClassName("bookshelf3")[0];
        bookobj["BookCategory"] = "Sci-fi"
        bookobj["Bookshelf"] =  catclass.value
    }if(catclass.value == "bookshelf4"){
        var shelf = document.getElementsByClassName("bookshelf4")[0];
        bookobj["BookCategory"] = "Magic"
        bookobj["Bookshelf"] =  catclass.value
    }if(catclass.value == "bookshelf5"){
        var shelf = document.getElementsByClassName("bookshelf5")[0];
        bookobj["BookCategory"] = "Zoology"
        bookobj["Bookshelf"] =  catclass.value
    }

    if (booknum.value != "1"){
        bookarr = JSON.parse(localStorage.getItem("bookarr"))
        var bookno = bookarr.length 
    }else{
        
        var bookno = 0
    }
    bookobj["booknme"] = book.value;
    bookobj["sloganline"] = sbtlebook.value;
    bookobj["tilt"] = tilted.value;
    bookobj["colorofbook"] = clrbook.value;
    bookobj["bookpath"] = pdfx.value;
    
    bookarr.push(bookobj)
    
    
    localStorage.setItem("bookarr",JSON.stringify(bookarr))
    var booksno = JSON.parse(localStorage.getItem("bookarr"))    
    
    
    var bookval = booksno[bookno].booknme;
    var booknode = document.createTextNode(bookval);
    
    var subval = booksno[bookno].sloganline;
    var subnode = document.createTextNode(subval)
    
    var tiltval = booksno[bookno].tilt;
    
    var pdfval = booksno[bookno].bookpath
    

    
    
    if(tiltval == "yes"){
        
        
        var tiltdiv = document.createElement("div")
        tiltdiv.setAttribute("class","book-tilted")
        var divbook = document.createElement("div")
        divbook.setAttribute("class",booksno[bookno].colorofbook)
        
        var nameofbook = document.createElement("h2")
        nameofbook.appendChild(booknode)
        divbook.appendChild(nameofbook)
        
        var subtle = document.createElement("h3")
        subtle.appendChild(subnode)
        divbook.appendChild(subtle)
        tiltdiv.appendChild(divbook)
        
        var pdf = document.createElement("a")
        pdf.setAttribute("href",pdfval)
        pdf.appendChild(tiltdiv)
        
        shelf.appendChild(pdf)
    }
    else{
        
        var divbook = document.createElement("div")
        divbook.setAttribute("class",booksno[bookno].colorofbook)
        
        var nameofbook = document.createElement("h2")
        nameofbook.appendChild(booknode)
        divbook.appendChild(nameofbook)
        
        var subtle = document.createElement("h3")
        subtle.appendChild(subnode)
        divbook.appendChild(subtle)
        
        var pdf = document.createElement("a")
        pdf.setAttribute("href",pdfval)
        pdf.appendChild(divbook)
        shelf.appendChild(pdf)
    }
    
    bookno ++
    localStorage.setItem("bookarr",JSON.stringify(bookarr))
    bookobj = {}
}
var Adding = document.getElementById("catbook")

function addcls(){
    if(Adding.value == "catadd"){
    $("#cates").addClass("disp")
    $("#cates").removeClass("nodisp")
    $("#cates2").addClass("nodisp")
    $("#cates2").removeClass("disp")
}else{
    $("#cates").addClass("nodisp")
    $("#cates").removeClass("disp")
    $("#cates2").addClass("disp")
    $("#cates2").removeClass("nodisp")
}
}
function forbook(){

    
    var booksarr = JSON.parse(localStorage.getItem("bookarr"));
    for(i=0; i<booksarr.length; i++){
        if(booksarr[i].Bookshelf == "bookshelf1"){
            var shelf = document.getElementsByClassName("bookshelf1")[0];
        }if(booksarr[i].Bookshelf == "bookshelf2"){
            var shelf = document.getElementsByClassName("bookshelf2")[0];
        }if(booksarr[i].Bookshelf == "bookshelf3"){
            var shelf = document.getElementsByClassName("bookshelf3")[0];
        }if(booksarr[i].Bookshelf == "bookshelf4"){
            var shelf = document.getElementsByClassName("bookshelf4")[0];
        }if(booksarr[i].Bookshelf == "bookshelf5"){
            var shelf = document.getElementsByClassName("bookshelf5")[0];
        }
        var bookval = booksarr[i].booknme;
    var booknode = document.createTextNode(bookval);
    
    var subval = booksarr[i].sloganline;
    var subnode = document.createTextNode(subval)
    
    var tiltval = booksarr[i].tilt;
    
    var pdfval = booksarr[i].bookpath

    
    // localStorage.setItem("bookarr",JSON.stringify(bookarr))
    // var booksno = JSON.parse(localStorage.getItem("bookarr"))    
    
    
    if(tiltval == "yes"){
        

        var tiltdiv = document.createElement("div")
        tiltdiv.setAttribute("class","book-tilted")
        var divbook = document.createElement("div")
        divbook.setAttribute("class",booksarr[i].colorofbook)
        
        var nameofbook = document.createElement("h2")
        nameofbook.appendChild(booknode)
        divbook.appendChild(nameofbook)
        
        var subtle = document.createElement("h3")
        subtle.appendChild(subnode)
        divbook.appendChild(subtle)
        tiltdiv.appendChild(divbook)
        
        var pdf = document.createElement("a")
        pdf.setAttribute("href",pdfval)
        pdf.appendChild(tiltdiv)
        
        shelf.appendChild(pdf)
    }
    else{
        
        var divbook = document.createElement("div")
        divbook.setAttribute("class",booksarr[i].colorofbook)
        
        var nameofbook = document.createElement("h2")
        nameofbook.appendChild(booknode)
        divbook.appendChild(nameofbook)
        
        var subtle = document.createElement("h3")
        subtle.appendChild(subnode)
        divbook.appendChild(subtle)
        
        var pdf = document.createElement("a")
        pdf.setAttribute("href",pdfval)
        pdf.appendChild(divbook)
        shelf.appendChild(pdf)
    }
}
catlod()
}



// Category add---------------------------------------
var catno = 0
var catobj = {}
var catarr = []
var catshelfC = document.getElementsByClassName("catshelf")[0]

var categname = document.getElementById("catnme");
var sbtlecat = document.getElementById("subtlecat");
var clrcat = document.getElementById("bookclassC");
var tiltedC = document.getElementById("tiltedC");
var newfunc = document.getElementById("newFun")

function addcat(){
    var catnumC = document.getElementById("catno");
    
    if (catnumC.value != "1"){
        catarr = JSON.parse(localStorage.getItem("catarr"))
        var catno = catarr.length 
    }else{
        
        var catno = 0
    }
    catobj["catnmeC"] = categname.value;
    catobj["slgnlinC"] = sbtlecat.value;
    catobj["tiltC"] = tiltedC.value;
    catobj["clrbookC"] = clrcat.value;
    catobj["newfun"] = newfunc.value;
    
    catarr.push(catobj)
    
    
    localStorage.setItem("catarr",JSON.stringify(catarr))
    var catsno = JSON.parse(localStorage.getItem("catarr"))    
    
    
    var catval = catsno[catno].catnmeC;
    var catnode = document.createTextNode(catval);
    
    var subCval = catsno[catno].slgnlinC;
    var subCnode = document.createTextNode(subCval)

    var tiltval = catsno[catno].tiltC;
    
    
    
    
    
    if(tiltval == "yes"){
        
        
        var cattiltdiv = document.createElement("div")
        cattiltdiv.setAttribute("class","book-tilted")
        var divbook = document.createElement("div")
        divbook.setAttribute("class",catsno[catno].clrbookC)
        divbook.setAttribute("onclick",catsno[catno].newfun)
        
        var catnameofbook = document.createElement("h2")
        catnameofbook.appendChild(catnode)
        divbook.appendChild(catnameofbook)
        
        var catsubtle = document.createElement("h3")
        catsubtle.appendChild(subCnode)
        divbook.appendChild(catsubtle)
        
        cattiltdiv.appendChild(divbook)
        
        catshelfC.appendChild(cattiltdiv)
    }
    else{
        
        var divbook = document.createElement("div")
        divbook.setAttribute("class",catsno[catno].clrbookC)
        divbook.setAttribute("onclick",catsno[catno].newfun)
        
        var catnameofbook = document.createElement("h2")
        catnameofbook.appendChild(catnode)
        divbook.appendChild(catnameofbook)
        
        var catsubtle = document.createElement("h3")
        catsubtle.appendChild(subCnode)
        divbook.appendChild(catsubtle)
        
        catshelfC.appendChild(divbook)
}
catno ++
localStorage.setItem("catarr",JSON.stringify(catarr))
catobj = {}
fornewshelf()
}

function catlod(){
    var catsno = JSON.parse(localStorage.getItem("catarr"))    
    
    for(i=0;i<catsno.length;i++){

        var catval = catsno[i].catnmeC;
        var catnode = document.createTextNode(catval);
        
        var subCval = catsno[i].slgnlinC;
        var subCnode = document.createTextNode(subCval)
    
        var tiltval = catsno[i].tiltC;
        
        
        
        
        if(tiltval == "yes"){
            
            
            var cattiltdiv = document.createElement("div")
            cattiltdiv.setAttribute("class","book-tilted")
            var divbook = document.createElement("div")
            divbook.setAttribute("class",catsno[i].clrbookC)
            divbook.setAttribute("onclick",catsno[i].newfun)
            
            var catnameofbook = document.createElement("h2")
            catnameofbook.appendChild(catnode)
            divbook.appendChild(catnameofbook)
            
            var catsubtle = document.createElement("h3")
            catsubtle.appendChild(subCnode)
            divbook.appendChild(catsubtle)
            
            cattiltdiv.appendChild(divbook)
            
            catshelfC.appendChild(cattiltdiv)
        }
        else{
            
            var divbook = document.createElement("div")
            divbook.setAttribute("class",catsno[i].clrbookC)
            divbook.setAttribute("onclick",catsno[i].newfun)
            
            var catnameofbook = document.createElement("h2")
            catnameofbook.appendChild(catnode)
            divbook.appendChild(catnameofbook)
            
            var catsubtle = document.createElement("h3")
            catsubtle.appendChild(subCnode)
            divbook.appendChild(catsubtle)
            
            catshelfC.appendChild(divbook)
    }
}
fornewshelf()
}



$(function() {

	$("#live").on("click",function(e){

		if (!$("main").hasClass("learn-selected")) {

			$("main").toggleClass("live-selected");

			var $this = $("#live a"),
			    href = $this.attr("href"),
			    topY = $(href).offset().top;
			 
			TweenMax.to($(window), 1, {
				scrollTo:{
					y: topY, 
					autoKill: true
				}, 
				ease:Power3.easeOut 
			});

			return false;

		}
		
	});

	$("#learn").on("click",function(e){
		
		if (!$("main").hasClass("live-selected")) {

			$("main").toggleClass("learn-selected");
			
			var $this = $("#learn a"),
			    href = $this.attr("href"),
			    topY = $(href).offset().top;
			 
			TweenMax.to($(window), 1, {
				scrollTo:{
					y: topY, 
					autoKill: true
				}, 
				ease:Power3.easeOut 
			});

			return false;

		}

	});

	$("#door-left, #door-right").on("click",function(e){
		//console.log("clicked");
		TweenLite.set(".door", {perspective:"400vw"});
		TimelineMax.add(getTL1());
		//TimelineMax.add(getTL2());
	});

});

//TweenLite.set(".door", {perspective:"400vw"});
//TimelineMax.add(getTL());
//TimelineMax.add(getTL2());
TimelineMax.add(getTL3());

function getTL1() {
	var tl = new TimelineMax({yoyo:true, repeat:0})
	.add("startTL")
	
	.fromTo("#card-left", 2.5, {x:0, rotationX:0, rotationY:0, skewX:0, skewY:0}, {rotationY:85, skewX:0, skewY:0, transformOrigin:"0", ease: Sine.easeInOut}, "startTL")
	
	.fromTo("#card-right", 2.5, {x:0, rotationX:0, rotationY:0, skewX:0, skewY:0}, {rotationY:-85, skewX:0, skewY:0, transformOrigin:"100%", ease: Sine.easeInOut}, "startTL")

	return tl;
}

function getTL2() {
	var tl = new TimelineMax({yoyo:true, repeat:0})
	.add("startTL")
	
	.fromTo("#rhomb1", 2.5, {}, {rotationY:80, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	.fromTo("#hockey1", 2.5, {}, {rotationY:80, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	.fromTo("#hockey2", 2.5, {}, {rotationY:80, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	.fromTo("#tri1", 2.5, {}, {rotationY:60, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	.fromTo("#tri2", 2.5, {}, {rotationY:120, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	.fromTo("#hockey3", 2.5, {}, {rotationY:260, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	.fromTo("#hockey4", 2.5, {}, {rotationY:260, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	.fromTo("#rhomb2", 2.5, {}, {rotationY:80, transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	return tl;
}

function getTL3() {
	var tl = new TimelineMax({yoyo:true, repeat:0})
	.add("startTL")
	
	.fromTo("#rhomb1", 2.5, {x:-10}, {}, "startTL")
	
	.fromTo("#hockey1", 2.5, {x:-10}, {}, "startTL")
	
	.fromTo("#hockey2", 2.5, {x:-10}, {}, "startTL")
	
	.fromTo("#tri1", 2.5, {x:-10}, {}, "startTL")
	
	.fromTo("#tri2", 2.5, {x:-160, rotationX:0, rotationY:180}, {transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	.fromTo("#hockey3", 2.5, {x:0, rotationX:0, rotationY:180}, {transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	.fromTo("#hockey4", 2.5, {x:0, rotationX:0, rotationY:180}, {transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	.fromTo("#rhomb2", 2.5, {x:-200, rotationX:0, rotationY:0}, {transformOrigin:"50% 50%", ease: Sine.easeInOut}, "startTL")
	
	return tl;
}

function doorchange(){
    setTimeout(function() {var dor = document.getElementById("maingate");
    dor.className += " chnge-door"
    var mymain =$("#mains")
    mymain.fadeOut()
}, 3000);

}

bookarr = {
    nmeofbook: ben10
    
    }

    fileInput.change(function(){
        $this = $(this);
        var file = $this.val().split("\\");
        if(file.length)
          $('#file').text(file[file.length-1]);
    })


function shelfhide(){
    var myshelf = $("#catshelf")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#bookshelf1");
        myshelf2.fadeIn();
                                }, 400);
}

function backshelf1(){
    var myshelf = $("#bookshelf1")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#catshelf");
        myshelf2.fadeIn();
                                }, 400);

}
function shelfhide2(){
    var myshelf = $("#catshelf")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#bookshelf2");
        myshelf2.fadeIn();
                                }, 400);
}
function backshelf2(){
    var myshelf = $("#bookshelf2")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#catshelf");
    myshelf2.fadeIn();
}, 400);

}
function shelfhide3(){
    var myshelf = $("#catshelf")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#bookshelf3");
    myshelf2.fadeIn();
}, 400);
}
function backshelf3(){
    var myshelf = $("#bookshelf3")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#catshelf");
    myshelf2.fadeIn();
}, 400);
}
function shelfhide4(){
    var myshelf = $("#catshelf")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#bookshelf4");
    myshelf2.fadeIn();
}, 400);
}

function backshelf4(){
    var myshelf = $("#bookshelf4")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#catshelf");
    myshelf2.fadeIn();
}, 400);

}
function shelfhide5(){
    var myshelf = $("#catshelf")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#bookshelf5");
    myshelf2.fadeIn();
}, 400);
}

function backshelf5(){
    var myshelf = $("#bookshelf5")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#catshelf");
    myshelf2.fadeIn();
}, 400);

}
function shelfhide6(){
    var myshelf = $("#catshelf")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#bookshelf6");
    myshelf2.fadeIn();
}, 400);
}

function backshelf6(){
    var myshelf = $("#bookshelf6")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#catshelf");
    myshelf2.fadeIn();
}, 400);

}
function shelfhide7(){
    var myshelf = $("#catshelf")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#bookshelf7");
    myshelf2.fadeIn();
}, 400);
}

function backshelf7(){
    var myshelf = $("#bookshelf7")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#catshelf");
    myshelf2.fadeIn();
}, 400);

}
function shelfhide8(){
    var myshelf = $("#catshelf")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#bookshelf8");
    myshelf2.fadeIn();
}, 400);
}

function backshelf8(){
    var myshelf = $("#bookshelf8")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#catshelf");
    myshelf2.fadeIn();
}, 400);

}
function shelfhide9(){
    var myshelf = $("#catshelf")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#bookshelf9");
    myshelf2.fadeIn();
}, 400);
}

function backshelf9(){
    var myshelf = $("#bookshelf9")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#catshelf");
    myshelf2.fadeIn();
}, 400);

}
function shelfhide10(){
    var myshelf = $("#catshelf")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#bookshelf10");
    myshelf2.fadeIn();
}, 400);
}

function backshelf10(){
    var myshelf = $("#bookshelf10")
    myshelf.fadeOut();
    setTimeout(function() {var myshelf2 = $("#catshelf");
    myshelf2.fadeIn();
}, 400);

}







// Where N is continue integer of function e.g 11,12,13,......
// function shelfhideN(){
//     var myshelf = $("#catshelf")
//     myshelf.fadeOut();
//     setTimeout(function() {var myshelf2 = $("#bookshelfN");
//     myshelf2.fadeIn();
// }, 400);
// }

// function backshelfN(){
//     var myshelf = $("#bookshelfN")
//     myshelf.fadeOut();
//     setTimeout(function() {var myshelf2 = $("#catshelf");
//     myshelf2.fadeIn();
// }, 400);

// }




