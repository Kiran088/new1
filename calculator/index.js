let num1=8
let num2=2

document.getElementById("num1-el").innerText=num1
document.getElementById("num2-el").innerText=num2

let sumEl=document.getElementById("sum-el")
function add(){

    let result=num1+num2
    sumEl.textContent="Sum:" +result
}

function sub(){

    let result=num1-num2
    sumEl.textContent="Substract:" +result


}
function mul(){

    let result=num1*num2
    sumEl.textContent="Multification:" +result


}function div(){

    let result=num1 / num2
    sumEl.textContent="Division:" +result


}