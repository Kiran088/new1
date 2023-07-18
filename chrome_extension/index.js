

let myleads=[""]
let inputEl=document.querySelector("#input-el")
let inputbtn=document.getElementById("input-btn")
let ulEl=document.querySelector("#ul-el")

let deletebtn=document.getElementById("del-btn")

let fetchfromlocalstorage=JSON.parse(localStorage.getItem("myleads"))

if(fetchfromlocalstorage){
    myleads=fetchfromlocalstorage
    render()
}

function render(){
    let listItems=""
    
    for(let i=0;i<myleads.length;i++){
        //listItems += "<li><a target='_blank' href='"+myleads[i]+"'>"+myleads[i]+"</a></li>"
        listItems+=`<li><a target='blank' href='${myleads[i]}'>${myleads[i]}</a> </li>`
        }
        ulEl.innerHTML=listItems
    
    }
inputbtn.addEventListener("click",function(){
    myleads.push(inputEl.value)
    inputEl.value=""//clears iput after the value entered to array
    localStorage.setItem("myleads",JSON.stringify(myleads))
     render()
     console.log(localStorage.getItem("myleads"))
}) 

deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads=[]
    render()
})  