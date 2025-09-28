

exports.error=(req,res,next)=>{
   res
 .status(404)
.render('404',{pageTitle:"Status 404",currentPage:"error-404"})
}
