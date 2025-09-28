const fs=require('fs')
const path=require('path');

const rootDir=require("../util/pathUtil");



// const registerdHomes=[];




module.exports=class Homes{
  constructor(home,email, price,location,rating,image){
    this.home=home
    this.email=email
    this.price=price
    this.location=location
    this.rating=rating
    this.image=image
  }
  save(){
    Homes.showAll(registerdHomes=>{
        registerdHomes.push(this)
const homeFilePath=path.join(rootDir,'data','home.json')
fs.writeFile(homeFilePath,JSON.stringify(registerdHomes),error=>{
    console.log('File writing is concluded',error);
})
    })

  }

  static showAll(callback){
    console.log(callback)
   const homeFilePath=path.join(rootDir,'data','home.json')
           console.log("hi running")
   if(fs.existsSync(homeFilePath)){
    // const stats=fs.statSync(homeFilePath===0)
         console.log("hi in IF")
  
   fs.readFile(homeFilePath,(error,data)=>{
        console.log("ERROR HERE:",error)
        if(fs.statSync(homeFilePath).size!==0){
          console.log("DATA:", data)
           callback( JSON.parse(data))
        }
        else{
          console.log('hello array')
            callback([]);
        }
    })

   }
    
    else{
     
        try {
          fs.mkdirSync("data",{recursive:true}) 
       const fileDescriptor= fs.openSync(homeFilePath,'wx');
        
      fs.closeSync(fileDescriptor);
    console.log('Empty file created synchronously successfully:', homeFilePath);
    console.log('TWO TIMES')
      callback([])
        }
 catch (err) {
    console.error('Error creating file:', err);
}
    }
  }

}