// External Modules
 const experess=require('express');
console.log
 // Local Modules
const {addHome,homeAdded} = require('../controllers/home');

// Variables
 const hostRouter=experess.Router();


 hostRouter.get('/add-home',addHome);
  
 hostRouter.post('/add-home',homeAdded);
      

 exports.hostRouter=hostRouter;
 
 