// variables

// 

const Homes=require('../Models/home');
// const dynamicHomes={
//   lonenly:Homes.showAll(answer =>{
//    console.log(answer) 
//    return answer}),pageTitle:"Home"}
// console.log(dynamicHomes)

// const addHome= (req,res,next)=>{
//    res.render('host/addHome',{pageTitle:"Add Home",currentPage:'add-home'});
// }


// const homeAdded=(req,res,next)=>{
//   const {home,email, price,location,rating,image}=req.body;
//  const instanceHome= new Homes(home,email,price,location,rating,image)
//   instanceHome.save()
//    res.render('host/homeAdded',{pageTitle:"Registerd Successfully" ,currentPage:"homeAdded"});
    
 //}


//  const homeList=(req,res,next)=>{
//    res.render('host/host-home-list',{pageTitle:"home-list for host",currentPage:"home-list"})
//  }


const storeHome= (req,res,next)=>{
    // console.log(registerdHomes);
       Homes.showAll(registerdHomes=>{
                    console.log(registerdHomes)
                res.render('store/home',{lonenly:registerdHomes,pageTitle:"Home",currentPage:'index'})
       })
      
}

const storeBook=(req,res,next)=>{
   res.render('store/booking',{currentPage:"booking",pageTitle:"Check Bookings"})
}

const storeBookHomeDetails=(req,res,next)=>{
   res.render('store/home-detail',{currentPage:"home-details" ,pageTitle:"Features in Homes"})
}

const storeFavouriteList=(req,res,next)=>{
 Homes.showAll(registerdHomes=>{res.render('store/favourite-list',{lonenly:registerdHomes, currentPage:"favourite-list",pageTitle:"Yours Favourite"})} ) 
}

const storeReserved=(req,res,next)=>{
   res.render('store/reserve',{currentPage:"reserve",pageTitle:"Reserved Homes"})
}
// exports.addHome=addHome;
// exports.homeAdded=homeAdded;
// exports.storeHome=storeHome
// exports.storeBook=storeBook
// exports.storeBookHomeDetails=storeBookHomeDetails

module.exports={storeHome,storeBook,storeBookHomeDetails,storeFavouriteList,storeReserved}