
//导入express模块
var express =require("express");
var fs =require("fs");
//生成路由
var router =express.Router();
// 网站首页 路由
router.get('/', (req, res) => {
    var questions = [];
    //file所有的文件名的数组
    fs.readdir("questions", (err, files) => {
        console.log(files);
        if(!err) {
            //倒序排列
            files.reverse();
            //循环读取文件的内容 加入questions数组里面
            files.forEach(function(file) {
                fs.readFile("questions/" + file, (err, data) => {
                    questions.push(JSON.parse(data.toString().trim()));
                    if(questions.length == files.length) {
                        res.render("index", {
                            title: "首页-问答系统",
                            privateJs: "index1",
                            data: questions
                        })

                    }
                })

            });

        }
    })
})
module.exports  = router;