// Core Modules
const path=require('path');
// External Modules
const express=require("express");

const PORT=3000;
const HOST=`https://silver-space-winner-v6rq7wxrpw55hxjq-3000.app.github.dev/`
const app=express();
app.listen(PORT,()=>{
    console.log(`Server is running at ${HOST}${PORT}`);
});

app.use(express.static(path.join(__dirname,'public')));
app.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','home.html'));
})