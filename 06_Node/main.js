
import http from "http";

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
  res.setHeader('content-type','text/html')  
    res.write(
   `<html>
    <head>
    <title>"Home"</title>
    </head> 
    <body>
    <a href='/Home'>'Home'</a>
    <a href='/Men'>"Men"</a>
    <a href='/Women'>"Women"</a>
    <a href="/Kids'>"Kids"</a>
    <a href="/Carts">'Carts'<a>
    </body>  
    </html>
    `
   
    )
     return res.end()
}
else if(req.url==="/home"){
    res.setHeader('type-content','text/HTML')
     res.write(
   `<html>
    <head>
    <title>"Home"</title>
    </head> 
    <body>
    <a href='/Home'>'Home'</a>
    <a href='/Men'>"Men"</a>
    <a href='/Women'>"Women"</a>
    <a href="/Kids'>"Kids"</a>
    <a href="/Carts">'Carts'<a>

    <section>Welcome to the Home Page of Mynatra</section>
    </body>  
    </html>
    `
     )
     return res.end()

}   


else if(req.url="/Men"){
     res.setHeader('type-content','text/HTML')
     res.write(
   `<html>
    <head>
    <title>"Home"</title>
    </head> 
    <body>
    <a href='/Home'>'Home'</a>
    <a href='/Men'>"Men"</a>
    <a href='/Women'>"Women"</a>
    <a href="/Kids'>"Kids"</a>
    <a href="/Carts">'Carts'<a>
    <section><h1>Welcome to Men Section</h1></section>
    </body>  
    </html>
    `
     )
     return res.end()
}



else if(req.url="/Women"){
    res.setHeader('type-content','text/HTML')
     res.write(
   `<html>
    <head>
    <title>"Home"</title>
    </head> 
    <body>
    <a href='/Home'>'Home'</a>
    <a href='/Men'>"Men"</a>
    <a href='/Women'>"Women"</a>
    <a href="/Kids'>"Kids"</a>
    <a href="/Carts">'Carts'<a>
    <section>Welcome to Women Secton</section>
    </body>  
    </html>
    `
     )
     return res.end()
}


else if(req.url="/Kids"){
     res.setHeader('type-content','text/HTML')
     res.write(
   `<html>
    <head>
    <title>"Home"</title>
    </head> 
    <body>
    <a href='/Home'>'Home'</a>
    <a href='/Men'>"Men"</a>
    <a href='/Women'>"Women"</a>
    <a href="/Kids'>"Kids"</a>
    <a href="/Carts">'Carts'<a>
    <section>Welcome to Kids Secton</section>
    </body>  
    </html>
    `
     )
     return res.end()
}

else if(req.url="/Carts"){
     res.setHeader('type-content','text/HTML')
     res.write(
   `<html>
    <head>
    <title>"Home"</title>
    </head> 
    <body>
    <a href='/Home'>'Home'</a>
    <a href='/Men'>"Men"</a>
    <a href='/Women'>"Women"</a>
    <a href="/Kids'>"Kids"</a>
    <a href="/Carts">'Carts'<a>
    <section><h1>Your Products in Cart</h1></section>
    </body>  
    </html>
    `
     )
     return res.end()
}

})

const PORT=3000;
server.listen(PORT,()=>{
  console.log("listening at https://")
})

