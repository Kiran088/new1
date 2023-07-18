function sum(a,b){
    return a+b
}
console.log(sum(2,4))

//arrow
let summ=(a,b)=>{
    return a+b
}
console.log(summ(2,66))





function isAPostiveNumber(number){
    return number>0
}
console.log(isAPostiveNumber(4))
//arrow

let PostiveNo=(no)=>{
 return no>0
}
console.log(PostiveNo(-1))


document.addEventListener('click',function(){
    console('clicked')
})

document.addEventListener('click',()=>{
    console('clicked')
})
