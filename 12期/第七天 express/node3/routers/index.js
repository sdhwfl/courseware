/**
 * Created by Administrator on 2016/11/8.
 */
var express=require('express');
var Router=express.Router();
// Router.get('/',function (req,res) {
//     res.send('hello world')
// })
// Router.get('/login',function (req,res) {
//     res.send('请进行登录！')
// })

//第一种形式的动态路由
Router.get('/user/:id/:name/',function (req,res) {
//    根据参数的不同，返回不同的内容就可以了
    console.log(req.params);
    var result=req.params;
    res.send(result);
})

//第二种形式动态路由
Router.get(/admin\/(\d+)/,function (req,res) {
    console.log(req.params);
    res.send('恭喜进入后台');
})
module.exports=Router;