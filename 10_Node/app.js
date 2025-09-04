// Core Modules
const path=require('path');
// External Modules
const express=require("express");

// Local Modules
const rootDir=require('./util/pathUtil');
const userRouter=require('./routes/userRouter');
 const hostRouter=require('./routes/hostRouter');

// Variables
const PORT=3001;
const HOST=`https://fantastic-space-pancake-r4q9rrq9jrwh5q7x-3000.app.github.dev/`
const app=express();

// Server Listening incoming Request
app.listen(PORT,()=>{
    console.log(`Server is running at ${HOST}${PORT}`);
});     

app.use(express.static(path.join(rootDir,'public')));
app.use(express.urlencoded());
app.use(userRouter);
// app.use(express.urlencoded());
app.use('/host',hostRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})