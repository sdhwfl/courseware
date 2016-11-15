//用户上传照片
var express=require("express");
var bodyParser=require("body-parser");
//引入 multer模块
var upload=require("../multer");
//引入公共模块 判断是否登录
var public=require("../public");
//生成路由
var router=express.Router();
router.use(bodyParser.urlencoded({
    extended: false
}));

//上传图片
router.get('/upload',public.isLogin, function(req, res) {
    res.render("upload", {
        title: "上传图片",
        privateJs: "upload",
    })
})
//用户上传头像
router.post('/api/user/photo',public.isLogin, upload.single('photo'), (req, res) => {
    //console.log(req.body);
    if(req.file.mimetype == "image/jpeg") {
        res.status(200).json({
            code: "success",
            content: "头像上传成功！"
        })
    } else {
        res.status(200).json({
            code: "error",
            content: "图片扩展名必须是jpg格式！"
        })
    }

})
module.exports=router;
