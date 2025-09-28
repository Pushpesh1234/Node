// External Modules
const express=require('express');
//Local Modules



const {storeHome,storeBook,storeBookHomeDetails,storeFavouriteList,storeReserved}=require('../controllers/storeController')



// Variables
const storeRouter=express.Router();

storeRouter.get('/',storeHome )
storeRouter.get('/booking',storeBook)
storeRouter.get('/home-details',storeBookHomeDetails)
storeRouter.get('/favourite-list',storeFavouriteList)
storeRouter.get('/reserve',storeReserved)

module.exports=storeRouter;