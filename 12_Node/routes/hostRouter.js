// External Modules
 const experess=require('express');

 // Local Modules
const {addHome,homeAdded,homeList} = require('../controllers/hostController');

// Variables
 const hostRouter=experess.Router();


 hostRouter.get('/add-home',addHome);
  
 hostRouter.post('/add-home',homeAdded);
      
 hostRouter.get('/home-list',homeList)

 exports.hostRouter=hostRouter;
 
 