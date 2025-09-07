// External Modules
const express=require('express');
//Local Modules
const rootDir=require('../util/pathUtil');
const Homes=require("./hostRouter")
const {registerdHomes}=Homes;
// console.log(rootDir);

// Core Modules
const path=require('path');

console.log(registerdHomes);

// Variables
const userRouter=express.Router();
const dynamicContent={
    lonenly:registerdHomes,
    pageTitle:"Home"
    
}
userRouter.get('/', (req,res,next)=>{
    console.log(registerdHomes);
    // res.sendFile(path.join(rootDir,'views','home.html'));
    res.render('home',dynamicContent)
      
    
})

module.exports=userRouter;