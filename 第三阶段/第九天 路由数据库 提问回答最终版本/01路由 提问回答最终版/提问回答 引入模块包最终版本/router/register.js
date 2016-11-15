/**
 * Created by Administrator on 2016/10/20.
 */
var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');

//生成路由
var router =express.Router();
//注册页面
router.get('/register', function(req, res) {
    res.render("register", {
        title: "注册",
        privateJs: "register",
    })
})
//注册
router.get('/api/register', (req, res) => {
    req.query.ip = req.ip
    req.query.time = new Date().getTime();
    console.log(req.query);
    //注册用户对象
    var user = req.query;
    if(user.password == user.password01) {
        //删除一个密码
        delete user.password01;
        console.log(user);
        fs.readFile('users/user.txt', (err, data) => {
            var users = data.toString().trim();
            var douhao = users.length > 0 ? "," : "";
            var userArr = JSON.parse("[" + users + "]");
            var isIn = userArr.some(function(element) {
                return(user.name == element.name);
            })
            if(isIn) {
                res.status(200).json({
                    "code": "error",
                    "content": "用户名已经存在！"
                })
            } else {
                fs.appendFile('users/user.txt', douhao + JSON.stringify(user), (err) => {
                    if(!err) {
                        res.status(200).json({
                            "code": "success",
                            "content": "注册成功！"
                        })
                    }
                })

            }
        })

    } else {
        //响应一个json数据 ajax接收就是发过来的json数据
        res.status(200).json({
            "code": "error",
            "content": "重复密码和密码不一致！"
        })
    }

})

module.exports  = router;