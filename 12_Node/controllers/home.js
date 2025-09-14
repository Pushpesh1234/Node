// variables

const registerdHomes=[];
const dynamicContent={
    lonenly:registerdHomes,
    pageTitle:"Home"
    
}



const addHome= (req,res,next)=>{
   res.render('addHome',{pageTitle:"Add Home"});
}


const homeAdded=(req,res,next)=>{
  const {home,email, price,location,rating,image}=req.body;
   registerdHomes.push({home,email,price,location,rating,image});
   console.log(registerdHomes)
   res.render('homeAdded',{pageTitle:"Registerd Successfully"});
    
 }


const users= (req,res,next)=>{
    console.log(registerdHomes);
    res.render('home',dynamicContent);   
}



exports.addHome=addHome;
exports.homeAdded=homeAdded;
exports.users=users