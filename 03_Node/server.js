const http=require("http");
const server=http.createServer((req,res)=>{
    // console.log(`URL:${req.url}, Method:${req.method}`, "Headers:", req.headers)
    console.log(req.url)
    if(req.url==='/'){
         res.setHeader('Content-Type','text/html')
    res.write(`<html><head><title></title></head> <body><h1>Welcome to my Landing page </h1></body></html>`)
    return res.end()
    }


    else if(req.url==='/products'){
        res.setHeader('Content-Type','text/html')
        res.write(`<html><head><title></title> </head> <body><h1>Choose Your products</h1></body></html>`)
    return res.end()
    }



    
    //    res.writeHead(404,"Page not found",{'Content-Type':'text/plain'})
    //    res.end()



//  res.setHeader('Content-Type','text/html')
//     res.write(`<html><head><title></title><js" defer></script>script src="script.</head> <body><h1>Welcome to my Landing page </h1></body></html>`)
//     res.end()

    // process.exit()
})



console.log("hello")
const PORT=3000
server.listen(PORT,()=>{
console.log(`Server running on address https://verbose-waffle-wr5gjxw5v465hv6r4-${PORT}.app.github.dev/products`)
// console.log(`Server running on address https://verbose-waffle-wr5gjxw5v465hv6r4-${PORT}.app.github.dev/products`)

})

