const http=require("http");
const server=http.createServer((req,res)=>{
    // console.log(`URL:${req.url}, Method:${req.method}`, "Headers:", req.headers)
    res.setHeader('Content-Type','text/html')
    res.write(`<html><head><title></title><script src="script.js" defer></script></head> <body><h1>This is server side rendering</h1></body></html>`)
    res.end()
    // process.exit()
})
console.log("hello")
const PORT=3000
server.listen(PORT,()=>{
console.log(`Server running on address https://verbose-waffle-wr5gjxw5v465hv6r4-${PORT}.app.github.dev`)
})

