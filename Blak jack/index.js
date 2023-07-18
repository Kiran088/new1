
let firstcard=getRandomcard()
let secondcard=getRandomcard()
cards=[firstcard,secondcard] //array of cards
sum=firstcard+secondcard
let message=""
let messageEl=document.getElementById("message-el")
let isAlive=true
let hasBalckJack=false


//let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
//query selector is used to select specific things
//like if if we use id then here we have to use #
// for class we have to use . symbol like that 
// and we can display yhe content wher ever we want like 
// we  we body in brackets then outputwill display 
// in the whole body.

let cardEl=document.querySelector(".card-el")


function getRandomcard(){
    let random=Math.ceil(Math.random() * 6)
    return random
}
function startgame(){
    document.write(k)    
    var k =Navigator.appversion;
    sumEl.textContent="Sum:" +sum
    cardEl.textContent="Cards:"+cards
    if(sum<21){
        message="Do you want to draw new card"
       
    }
    else if(sum==21){
        message="you have black jack"
        hasBalckJack=true
    }
    else{
        message="you are out of the game"
        isAlive=false
    }

    console.log(messageEl)
    messageEl.textContent=message
}
function newcard(){
    let card=7
    sum+=card
    cards.push(card)
    startgame()
}