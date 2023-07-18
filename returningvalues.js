let play1time=12
let play2time=10

function getfastestreactiontime(){
    if(play1time<play2time){
    return play1time
    }
    else if(play2time<play1time)
    {
        return play2time
    }else
    return play1time

}

let fastesttime=getfastestreactiontime()

console.log(fastesttime)