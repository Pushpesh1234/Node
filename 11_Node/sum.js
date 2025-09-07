function Sum(...nums){
 return nums.reduce((curr,acc)=>{console.log(curr,acc)
    return curr+acc
 });
}


function Product(...nums){
 return nums.reduce((curr,acc)=>{console.log(curr,acc)
    return curr*acc
 });
}
// console.log("5")
// console.log(Sum(1,2,3,4,5,6,7));
// const obj={}

// obj.example={join:Sum,product:Product}

// console.log(obj.example.join)

// module.exports={join:Sum,times:Product};
// module.exports={ Sum, Product};
module.exports=Sum;
