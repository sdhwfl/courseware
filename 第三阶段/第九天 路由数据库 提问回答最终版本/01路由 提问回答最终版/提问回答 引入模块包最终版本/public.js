
//是否登录
function  isLogin(req,res,next){
if(req.cookies.name){
    next();
}else{
    console.log("请登录")
    res.redirect("/login")
}
}
function first() {

}

var  funObj ={
    isLogin:isLogin,
    first:first
}
module.exports =funObj;







































