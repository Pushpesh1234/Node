// External Modules
 const experess=require('express');

 // Core Modules
 const path=require('path');

 // Local Modules
 const rootDir=require('../util/pathUtil');
const bodyParser = require('body-parser');


// Variables
 const hostRouter=experess.Router();

 hostRouter.get('/add-home',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','addHome.html'));
 })

 hostRouter.post('/add-home',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','homeAdded.html'));
    console.log(req.body)
 })

 module.exports=hostRouter;