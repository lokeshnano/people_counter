
let msg = document.getElementById("Title-el")
msg.innerText = "PeopleCounter"

let countv =document.getElementById("count")
let counter = document.getElementById("msg_counter")


let text = "Total People Entered"
counter.innerText = text


let reset  = document.getElementById("reset")
reset.innerText = 'Reset'






let count_ = 0
function increment()
{

    count_ += 1
    countv.innerText = count_
  
}

function save(){
    let temp =  count_+" - "
    counter.innerText += temp
}

function reset1(){
    counter.innerText = text+" "+'0'
    count_ = 0
    countv.innerText  = count_
}