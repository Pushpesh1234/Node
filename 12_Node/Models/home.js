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
    this.image-image
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
    fs.readFile(homeFilePath,(error,data)=>{
        console.log(data,"ERROR HERE")
        if(!error){
          console.log("hello")
           callback( JSON.parse(data))
        }
        else{
          console.log('hello array')
            callback([]);
        }
    })
    
  }

}