// External Modules
const express=require('express');
//Local Modules
const rootDir=require('../util/pathUtil');
// console.log(rootDir);

// Core Modules
const path=require('path');


// Variables
const userRouter=express.Router();

userRouter.get('/', (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','home.html'));
    
})

module.exports=userRouter;