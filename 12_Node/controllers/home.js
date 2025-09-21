// variables

// 

const Homes=require('../Models/home');
// const dynamicHomes={
//   lonenly:Homes.showAll(answer =>{
//    console.log(answer) 
//    return answer}),pageTitle:"Home"}
// console.log(dynamicHomes)

const addHome= (req,res,next)=>{
   res.render('addHome',{pageTitle:"Add Home"});
}


const homeAdded=(req,res,next)=>{
  const {home,email, price,location,rating,image}=req.body;
 const instanceHome= new Homes(home,email,price,location,rating,image)
  instanceHome.save()
   res.render('homeAdded',{pageTitle:"Registerd Successfully"});
    
 }


const users= (req,res,next)=>{
    // console.log(registerdHomes);
       Homes.showAll(registerdHomes=>{
                res.render('home',{lonenly:registerdHomes,pageTitle:"Home"})
       })
      
}



exports.addHome=addHome;
exports.homeAdded=homeAdded;
exports.users=users