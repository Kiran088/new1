let hands=["rock","paper","seasor"]
function gethand(){
    let r=Math.floor(Math.random()*3)
    return hands[r]
}

console.log(gethand())