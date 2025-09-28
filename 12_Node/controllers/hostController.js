

const Homes=require('../Models/home');

const addHome= (req,res,next)=>{
   res.render('host/addHome',{pageTitle:"Add Home",currentPage:'add-home'});
}


const homeAdded=(req,res,next)=>{
  const {home,email, price,location,rating,image}=req.body;
 const instanceHome= new Homes(home,email,price,location,rating,image)
  instanceHome.save()
   res.render('host/homeAdded',{pageTitle:"Registerd Successfully" ,currentPage:"homeAdded"});
    
 }

 const homeList=(req,res,next)=>{
     Homes.showAll(registerdHomes=>{res.render('host/host-home-list',{lonenly:registerdHomes,pageTitle:"home-list for host",currentPage:"home-list"})})
 }


 module.exports={addHome,homeAdded,homeList}