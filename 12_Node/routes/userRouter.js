// External Modules
const express=require('express');
//Local Modules

const Homes=require("./hostRouter")

const {users}=require('../controllers/home')








// Variables
const userRouter=express.Router();

userRouter.get('/',users )

module.exports=userRouter;