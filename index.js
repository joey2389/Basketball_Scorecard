let homeEl= document.getElementById("el-home")
let guestEl=document.getElementById("el-guest")

let count=0  

function homeone(){
count +=1
homeEl.textContent=count
}

function hometwo(){
    count +=2
homeEl.textContent=count
}

function homethree(){
    count +=3
homeEl.textContent=count
}

let guestCount=0
function Guestone(){
    guestCount +=1
    guestEl.textContent=guestCount
    }
    
    function Guesttwo(){
        guestCount +=2
    guestEl.textContent=guestCount
    }
    
    function Guestthree(){
        guestCount +=3
    guestEl.textContent=guestCount
    }