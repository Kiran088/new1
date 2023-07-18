let countEl=document.getElementById("count-el")
    console.log(countEl)
let saveEl=document.getElementById("save-el")
    console.log(saveEl)

count=0
function increment(){
    count+=1
    countEl.innerText=count;

} 
function save(){
    let countstr=count + " - "
    saveEl.innerText+=countstr
    count=0  
} 