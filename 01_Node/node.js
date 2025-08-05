import fs from 'fs';
fs.writeFile("output.txt","Writing a File",(err)=>{
    if(err)console.log("Failed to write")
        else console.log("Written successfully")
})