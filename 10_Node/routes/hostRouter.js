// External Modules
 const experess=require('express');

 // Core Modules
 const path=require('path');

 // Local Modules
 const rootDir=require('../util/pathUtil');
const bodyParser = require('body-parser');


// Variables
 const hostRouter=experess.Router();
 const registerdHomes=[];

 hostRouter.get('/add-home',(req,res,next)=>{
   //  res.sendFile(path.join(rootDir,'views','addHome.html'));
   res.render('addHome',{pageTitle:"Add Home"});
 })

 hostRouter.post('/add-home',(req,res,next)=>{
   registerdHomes.push({home:req.body.home,email:req.body.email})
   console.log(registerdHomes)
   //  res.sendFile(path.join(rootDir,'views','homeAdded.html'));
   res.render('homeAdded',{pageTitle:"Registerd Successfully"});
    
 })
    

 exports.hostRouter=hostRouter;
 exports.registerdHomes=registerdHomes;