
var express =require("express");
var fs =require("fs");
//引入multer  模块
var  upload = require("../multer");
//引入  公共模块
var  public =require("../public");
//生成路由
var router =express.Router();
router.get('/ask',public.isLogin,function(req,res){
    res.render("ask",{
        title:"提交问题",
        privateJs:"ask"
    })
})
router.get('/api/ask',public.isLogin, function(req, res) {
    var user = {};
    user.content = req.query.content;
    user.ip = req.ip;
    user.time = new Date().getTime();
    user.name = req.cookies.name;
    console.log(user);
    var txtName = user.time + ".txt";
    fs.appendFile('questions/' + txtName, JSON.stringify(user), (err) => {
        res.status(200).json({
            code: "success",
            content: "提问成功！"
        })
    })
})

module.exports = router;