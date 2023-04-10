var dataa = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    },{
        title: "Social",
        timeframes: {
          daily: {
            current: 1,
            previous: 3
          },
          weekly: {
            current: 5,
            previous: 10
          },
          monthly: {
            current: 21,
            previous: 23
          }
        }
      },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    },
    
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
    }
  ]
for(i=0;i<dataa.length;i++){




    // console.log(dataa[i].title)
    // console.log(dataa[i].timeframes.daily.current)
    // console.log(dataa[i].timeframes.daily.previous)
    // console.log(dataa[i].timeframes.weekly.current)
    // console.log(dataa[i].timeframes.weekly.previous)
    // console.log(dataa[i].timeframes.monthly.current)
    // console.log(dataa[i].timeframes.monthly.previous)
}

var dailybtn = document.querySelector("#daily")
dailybtn.addEventListener("click",days)
var weeklybtn = document.querySelector("#weekly")
weeklybtn.addEventListener("click",weekly)
var monthlybtn = document.querySelector("#monthly")
monthlybtn.addEventListener("click",monthly)

function days(){
    dailybtn.classList.add("active")
    monthlybtn.classList.remove("active")
    weeklybtn.classList.remove("active")

    for(i=0;i<dataa.length;i++){
        var current = document.getElementsByClassName("current")[i]
        var prev = document.getElementsByClassName("prev")[i]
        var dates = document.getElementsByClassName("dates")[i]

        current.innerHTML = dataa[i].timeframes.daily.current+"hrs"
        dates.innerHTML = "day"
        prev.innerHTML = dataa[i].timeframes.daily.previous+"hrs"
        
    }
}
function weekly(){
    dailybtn.classList.remove("active")
    monthlybtn.classList.remove("active")
    weeklybtn.classList.add("active")

    for(i=0;i<dataa.length;i++){
        var current = document.getElementsByClassName("current")[i]
        var prev = document.getElementsByClassName("prev")[i]
        var dates = document.getElementsByClassName("dates")[i]

        current.innerHTML = dataa[i].timeframes.weekly.current+"hrs"
        dates.innerHTML = "week"
        prev.innerHTML = dataa[i].timeframes.weekly.previous+"hrs"
        
    }
}
function monthly(){
    weeklybtn.classList.remove("active")
    dailybtn.classList.remove("active")
    monthlybtn.classList.add("active")

    for(i=0;i<dataa.length;i++){
        var current = document.getElementsByClassName("current")[i]
        var prev = document.getElementsByClassName("prev")[i]
        var dates = document.getElementsByClassName("dates")[i]

        current.innerHTML = dataa[i].timeframes.monthly.current+"hrs"
        dates.innerHTML = "month"
        prev.innerHTML = dataa[i].timeframes.monthly.previous+"hrs"
        
    }
}
// monthly()
// days()