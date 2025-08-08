import fs from 'fs'
import http from 'http'


const server=http.createServer((req,res)=>{
    console.log(req.url)

  if(req.url==='/'){
  res.setHeader('Content-Type','text/html')
  res.write('<html><head><title>Home</title></head>')
  res.write('<body> <h1>Welcome to my Home Page</h1>')
  res.write('<form  " action="/submit-info" method="POST">')

res.write(`<div style="display:flex ;flex-direction:column ;row-gap:10px;align-items:flex-start" >`)
res.write('<div>')
  res.write('<label for="name">Male:</label>')
  res.write('<input type="text" id="name" name="username" placeholder="john Doe" ></br>')
  res.write('</div>')

res.write('<div >')
  res.write('<label for="male">Male:</label>')
  res.write('<input type="radio" name="gender" id="male" value="male" ></br>')
res.write('</div>')

    res.write('<div>')
  res.write('<label for="female">Female:</label>')
  res.write('<input type="radio" name="gender" id="female" value="female"> </br>')
  res.write('</div>')

  // res.write('<div>')
  res.write('<input type="submit" value="Submit">')
  // res.write('</div>')
  res.write('</div>')
  res.write('</form>')
  res.write('</body>')
  res.write("</html>")
return res.end()
  }

 else if(req.url.toLowerCase()==="/products"){
   res.setHeader('Content-Type','text/html')
    res.write(`<html><head><title></title></head> <body><h1>Our Products!! </h1></body></html>`)
    return res.end()
 }

    else if(req.url==='/submit-info' && req.method==='POST' ) {
        // res.setHeader('Content-Type','text/html')
        // res.write(`<html><head><title></title> </head> <body><h1>Form Submmited Successfully</h1></body></html>`)
        fs.writeFileSync('run.txt','Pushpesh')
        res.statusCode=302;
        res.setHeader('Location','/')
     res.end()
    }
 
else{
  console.log(req.method)
  res.statusCode=404;
}
})



// console.log(server)
const PORT=3000
const link=`Server running on address https://verbose-waffle-wr5gjxw5v465hv6r4-${PORT}.app.github.dev`
const hear=server.listen(PORT,()=>{
console.log(` ${link} ` )
})

// console.log(link)