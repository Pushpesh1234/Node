// External Modules
const express=require('express');
//Local Modules
const rootDir=require('../util/pathUtil');
const { registerdHomes }=require("./hostRouter")
// console.log(rootDir);

// Core Modules
const path=require('path');



// Variables
const userRouter=express.Router();

userRouter.get('/', (req,res,next)=>{
    console.log(registerdHomes);
    // res.sendFile(path.join(rootDir,'views','home.html'));
    res.render('home',{lonenly:registerdHomes})

    
})

module.exports=userRouter;