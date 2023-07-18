let p=new Promise((res,rej)=>{
    let user="kiran";
    let pass="kk"
    
    if(user=="kiran" || pass=="k")
    {
        res()
    }
    else{
        rej()
    }
    })
let message="kkk"
  p.then((message)=>{
      console.log("resolved")
  }).catch((err)=>{
      console.log("rejested")
  })