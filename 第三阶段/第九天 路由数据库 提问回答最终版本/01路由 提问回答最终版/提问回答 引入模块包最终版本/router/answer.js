//用户回答问题
var express=require("express");
var fs=require("fs");
//引入 multer模块
var upload=require("../multer");
//引入公共模块判断是否登录
var public=require("../public");
//生成路由
var router =express.Router();
router.get('/answer',public.isLogin, (req, res) => {
    res.render("answer", {
        title: "回答问题",
        privateJs: "answer"
    })
})


router.get('/api/answer',public.isLogin, (req, res) => {
    console.log(req.query)
    var answer = req.query;
    answer.ip = req.ip;
    answer.name = req.cookies.name;
    answer.time = new Date().getTime();
    fs.readFile("questions/" + answer.question + ".txt", (err, data) => {
        if(!err) {
            //问题的对象
            var askobj = JSON.parse(data.toString());
            if(typeof askobj.answer == "object") {
                askobj.answer.push(answer)
            } else {
                askobj.answer = [];
                askobj.answer.push(answer)
            }
            fs.writeFile("questions/" + answer.question + ".txt", JSON.stringify(askobj), (err) => {
                if(!err) {
                    res.status(200).json({
                        code: "success",
                        content: "回答问题成功！"
                    })
                }
            })

        }
    })

})
module.exports= router;