let sentences=["hello","hii","welcome"]

let greetEl=document.getElementById("greet-el")

for(let i=0;i<sentences.length;i++)
 {
    greetEl.textContent+=sentences[i]
    console.log(sentences[i])
 }